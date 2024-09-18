import { deletePost } from "../../../lib/action"
import { getPosts } from "../../../lib/data"

const AdminPosts = async () => {

	const posts = await getPosts()



	return (
		<>
			<div>
				<h1>Стихи</h1>
				{posts.map((post) => (
					<div key={[post.id]}>
						<div>
							{/*							<Image src={post.img || 'noAvatar.png'} alt='аватар' width={50} heigth={50} />
*/}						</div>
						<span>{post.title}</span>
						<form action={deletePost}>
							<input type="hidden" name="id" value={post.id} />
							<button>Удалить</button>
						</form>
					</div>
				))}
			</div>
		</>
	)
}

export default AdminPosts