import AdminPostForm from "@/components/adminPostForm/adminPostForm"
import AdminPosts from "@/components/adminPosts/adminPosts"
import AdminUserForm from "@/components/adminUserForm/adminUserForm"
import AdminUsers from "@/components/adminUsers/adminUsers"
import { Suspense } from "react"
import { auth } from "../../../lib/auth"

const AdminPage = async () => {

	const session = await auth()

	return (
		<>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<AdminPosts />
				</Suspense>
			</div>

			<div>
				<AdminPostForm userId={session.user.id} />
			</div>

			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<AdminUsers />
				</Suspense>
			</div>

			<div>
				<AdminUserForm />
			</div>
		</>
	)
}

export default AdminPage