"use client"

import { useFormState } from "react-dom"
import { registration } from "../../../lib/action"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const RegistrationFormPage = () => {

	const [state, formAction] = useFormState(registration, undefined)

	const router = useRouter()

	useEffect(() => {
		state?.success && router.push('/login')
	}, [state?.success, router])

	return (
		<>
			<form action={formAction}>
				<input type="text" placeholder="username" name="username" />
				<input type="email" placeholder="email" name="email" />
				<input type="password" placeholder="password" name="password" />
				<input type="password" placeholder="password again" name="passwordRepeat" />
				<button>
					Зарегистрироваться
				</button>
				{state?.error}
				<Link href="/login" className="text-white" >
					У вас уже есть аккаунт? <b>Войти</b>
				</Link>
			</form>
		</>
	)
}

export default RegistrationFormPage