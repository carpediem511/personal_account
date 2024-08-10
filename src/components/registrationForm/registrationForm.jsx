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
			<div className="w-full px-4 py-20 mx-auto bg-[#451877] xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
				<h1 className="mb-4 -mt-3 text-2xl leading-snug tracking-tight text-left text-[#fffffd] md:text-4xl font-caveat">
					Присоединяйся, чтобы всё важное оставалось рядом
				</h1>

				<form action={formAction} className="mt-8 space-y-4">
					<label className="block">
						<span className="block mb-1 text-xs font-medium text-[#d0cce5]">Введи логин</span>
						<input
							className="form-input bg-[#8949c1] text-[#fffffd] placeholder-[#d0cce5] border border-[#8284b4] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#b6e1f1] transition duration-300 ease-in-out shadow-md hover:shadow-lg w-2/3 mx-auto"
							type="text"
							placeholder="Например, carpediem"
							name="username"
							required
						/>
					</label>
					<label className="block">
						<span className="block mb-1 text-xs font-medium text-[#d0cce5]">Введи электронную почту</span>
						<input
							className="form-input bg-[#8949c1] text-[#fffffd] placeholder-[#d0cce5] border border-[#8284b4] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#b6e1f1] transition duration-300 ease-in-out shadow-md hover:shadow-lg w-2/3 mx-auto"
							type="email"
							placeholder="Например, carpediem@yandex.ru"
							name="email"
							required
						/>
					</label>
					<label className="block">
						<span className="block mb-1 text-xs font-medium text-[#d0cce5]">Твой пароль</span>
						<input
							className="form-input bg-[#8949c1] text-[#fffffd] placeholder-[#d0cce5] border border-[#8284b4] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#b6e1f1] transition duration-300 ease-in-out shadow-md hover:shadow-lg w-2/3 mx-auto"
							type="password"
							name="password"
							placeholder="••••••••"
							required
						/>
					</label>
					<label className="block">
						<span className="block mb-1 text-xs font-medium text-[#d0cce5]">Повтори пароль ещё раз</span>
						<input
							className="form-input bg-[#8949c1] text-[#fffffd] placeholder-[#d0cce5] border border-[#8284b4] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#b6e1f1] transition duration-300 ease-in-out shadow-md hover:shadow-lg w-2/3 mx-auto"
							type="password"
							name="passwordRepeat"
							placeholder="••••••••"
							required
						/>
					</label>
					<button className="w-full bg-[#b6e1f1] text-[#451877] font-bold py-2 px-4 rounded-lg hover:bg-[#95dfea] transition duration-300 ease-in-out">
						Зарегистрироваться
					</button>
					{state?.error}
				</form>
				<div className="pt-6 mt-6 text-sm font-medium text-[#d0cce5] border-t border-[#8284b4]">
					У тебя уже есть аккаунт?
					<Link href="/login" className="text-[#b6e1f1] hover:text-[#95dfea] pl-6">Войти</Link>
				</div>
			</div>
		</>
	)
}

export default RegistrationFormPage 