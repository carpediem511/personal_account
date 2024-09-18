import LoginForm from "@/components/loginForm/loginForm"
import { handleGithubLogin } from "../../../../lib/action"
import { GitHub } from "react-feather"

const LoginPage = () => {

	return (
		<>
			<div className="w-full px-4 py-20 mx-auto bg-[#451877] xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
				<form action={handleGithubLogin}>
					<h1 className="mb-4 -mt-3 text-2xl text-center leading-snug tracking-tight text-[#fffffd] md:text-4xl font-caveat">
						Возвращайтесь к своим важным моментам
					</h1>
					<div className="mt-8 space-y-10">
						<div className="flex justify-center">
							<button
								type="submit"
								className="py-3 px-4 bg-[#8949c1] text-[#fffffd] border border-[#8284b4] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#b6e1f1]"
							>
								<GitHub className="mr-2" />
								<span className="font-semibold">Продолжить с GitHub</span>
							</button>
						</div>
						<div className="text-center border-b border-[#8284b4]">
							<span className="p-2 text-xs font-semibold tracking-wide text-[#d0cce5] uppercase bg-[#451877]">
								Или
							</span>
						</div>
					</div>
				</form>
				<LoginForm />
			</div>
		</>
	)
}

export default LoginPage 