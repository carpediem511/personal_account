import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { makeConnectToDB } from "./connectionDB"
import { User } from "./models"
import bcrypt from "bcryptjs"

const login = async (credentials) => {
	try{
		makeConnectToDB()
		const user = await User.findOne({username: credentials.username})

		if(!user){
			console.log('Пользователь не найден!')
		}

		const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

		if(!isPasswordCorrect){
			console.log('Неправильный пароль!')
		}

		return user
	} catch(error) {
		console.log(error)
	}
}



export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({ 
	providers: [ 
		GitHub({
			clientId:process.env.GITHUB_ID, 
			clientSecret:process.env.GITHUB_SECRET
		}),
		CredentialsProvider({
			async authorize(credentials) {
				try{
					const user = await login(credentials)
					return user
				} catch(error){
					return null
				}
			}
		}) 
	],
	callbacks:{
		async signIn({user, account, profile}) {

			if(account.provider === 'github'){
				makeConnectToDB()
				try{
					const user = await User.findOne({email: profile.email})

					if(!user){
						const newUser = new User({
							username: profile.login,
							email: profile.email,
							image: profile.avatar_url,
						})

						await newUser.save()
					}
				} catch(error){
					console.log(error)
					return false
				}
			}
			return true
		}
	}
})