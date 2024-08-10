import Image from "next/image"
import Links from "./links/Links"
import { auth } from "../../../lib/auth"

const Navbar = async () => {

	const session = await auth()
	console.log(session)

	return (
		<div className="flex align-middle items-center justify-between">
			<Image src='/images/logo-site.png' alt="logo" priority width={100} height={100} />
			<Links session={session} />
		</div>
	)
}

export default Navbar