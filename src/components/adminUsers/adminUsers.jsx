import { deleteUser } from "../../../lib/action"
import { getUsers } from "../../../lib/data"

const AdminUsers = async () => {

	const users = await getUsers()

	return (
		<>
			<div>
				<h1>Пользователи</h1>
				{users.map((user) => (
					<div key={[user.id]}>
						<div>
							{/*							<Image src={post.img || 'noAvatar.png'} alt='аватар' width={50} heigth={50} />
*/}						</div>
						<span>{user.username}</span>
						<form action={deleteUser}>
							<input type="hidden" name="id" value={user.id} />
							<button>Удалить</button>
						</form>
					</div>
				))}
			</div>
		</>
	)
}

export default AdminUsers