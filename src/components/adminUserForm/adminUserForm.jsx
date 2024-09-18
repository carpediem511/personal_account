"use client"

import { addUser } from "../../../lib/action"
import { useFormState } from "react-dom"

const AdminUserForm = () => {

	const [state, formAction] = useFormState(addUser, undefined)

	return (
		<>
			<form action={formAction} >
				<h1>Добавить нового пользователя</h1>
				<input type="text" name="username" placeholder="username" />
				<input type="text" name="email" placeholder="email" />
				<input type="text" name="password" placeholder="password" />
				<input type="text" name="img" placeholder="img" />
				<select name="isAdmin" >
					<option value='false' >Админ?</option>
					<option value='false' >Нет</option>
					<option value='true' >Да</option>
				</select>

				<button>
					Добавить
				</button>
				{state && state.error}
			</form>
		</>
	)
}

export default AdminUserForm