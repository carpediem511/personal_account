import { registration } from "../../../../lib/action"

const RegistrationPage = () => {
	return (
		<>
			<form action={registration}>
				<input type="text" placeholder="username" name="username" />
				<input type="email" placeholder="email" name="email" />
				<input type="password" placeholder="password" name="password" />
				<input type="password" placeholder="password again" name="passwordRepeat" />
				<button>
					Зарегистрироваться
				</button>
			</form>
		</>
	)
}

export default RegistrationPage