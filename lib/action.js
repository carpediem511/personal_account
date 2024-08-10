'use server'

import { revalidatePath } from "next/cache"
import { makeConnectToDB } from "./connectionDB"
import { Post, User } from "./models"
import { signIn, signOut } from "./auth"
import bcrypt from 'bcryptjs'

export const addPost = async(formData) => {


	const {title, text, author, date, slug, poemID} = Object.fromEntries(formData)

	try {
		makeConnectToDB()
		const newPost = new Post({
			title, text, author, date, slug, poemID
		})
		await newPost.save()
		console.log('save to db')
		revalidatePath('/blog')
	} catch (error) {
		console.log(error)
		return{error: "Что-то пошло не так..."}
	}
	
}

export const deletePost = async(formData) => {


	const {id} = Object.fromEntries(formData)

	try {
		makeConnectToDB()
		await Post.findByIdAndDelete(id)
		console.log('deleted of db')
		revalidatePath('/blog')
	} catch (error) {
		console.log(error)
		return{error: "Что-то пошло не так..."}
	}
	
}

export 	const handleGithubLogin = async () => {
		"use server"
		await signIn("github")
	}

export 	const handleLogout = async () => {
		"use server"
		await signOut()
	}

export const registration = async (prevState, formData) => {
	const {username, email, password, img, passwordRepeat } = Object.fromEntries(formData)

	if (password !== passwordRepeat){
		return {error: "Введённые пароли не совпадают!"}
	}
	try {
		makeConnectToDB()

		const user = await User.findOne({username})

		if (user) {
			return {error: "Пользователь с таким именем уже зарегистрирован!"}
		}

		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = new User({
			username, 
			email, 
			password: hashedPassword, 
			img
		})

		await newUser.save()
		return {success: true}
	} catch (error){
		console.log(error)
		return {error: "Что-то пошло не так"}
	}
}

export const login = async (prevState, formData) => {
	const {username, password} = Object.fromEntries(formData)

	try {
		await signIn("credentials", {username, password})
	} catch (error){
		if(error.message.includes("CredentialsSignin")){
			return {error: 'Неверный логин или пароль!'}
		}
		throw error
	}
}