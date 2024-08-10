import { handleGithubLogin, login } from "../../../../lib/action"

const LoginPage = async () => {

	return (
		<>
			<form action={handleGithubLogin}>
				<button
					type="submit"
					className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
				>
					Войти через GitHub
				</button>
			</form>

			<form action={login}>
				<input type="text" placeholder="username" name="username" />
				<input type="password" placeholder="password" name="password" />
				<button>
					Войти как пользователь
				</button>
			</form>
		</>
	)
}

export default LoginPage