"use client"

import { useFormState } from "react-dom"
import { login } from "../../../lib/action"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const LoginForm = () => {

	const [state, formAction] = useFormState(login, undefined)

	const router = useRouter()

	/*	useEffect(() => {
			state?.success && router.push('/login')
		}, [state?.success, router])*/

	return (
		<>
			<form action={formAction}>
				<input type="text" placeholder="username" name="username" />
				<input type="password" placeholder="password" name="password" />

				<button>
					Войти
				</button>
				{state?.error}
				<Link href="/registration" className="text-white" >
					У вас ещё нет аккаунта? <b>Зарегистрироваться</b>
				</Link>
			</form>
		</>
	)
}

export default LoginForm