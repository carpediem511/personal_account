import Image from "next/image"
import Links from "./links/Links"

const Navbar = () => {
	return (
		<div className="flex align-middle items-center justify-between">
			<Image src='/images/logo-site.png' alt="logo" priority width={100} height={100} />
			<Links />
		</div>
	)
}

export default Navbar