"use client"

import { addPost } from "../../../lib/action"
import { useFormState } from "react-dom"

const AdminPostForm = ({ userId }) => {

	const [state, formAction] = useFormState(addPost, undefined)

	return (
		<>
			<form action={formAction} >
				<h1>Добавить новый стих</h1>
				<input type="text" name="title" placeholder="title" />
				<input type="text" name="text" placeholder="text" />
				<input type="text" name="img" placeholder="img" />
				<input type="text" name="slug" placeholder="slug" />
				<input type="hidden" name="userId" value={userId} />
				<button>
					Добавить
				</button>
				{state && state.error}
			</form>
		</>
	)
}

export default AdminPostForm