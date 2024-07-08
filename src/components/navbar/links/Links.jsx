import Link from "next/link"

const Links = () => {

	const links = [
		{
			title: "Home Page",
			path: "/",
		},

		{
			title: "About",
			path: "/about",
		},

		{
			title: "Blog",
			path: "/blog",
		},

		{
			title: "Game",
			path: "/game",
		},

		{
			title: "Media",
			path: "/media",
		},
	]

	return (
		<div>
			{links.map((link) => (
				<Link href={link.path} key={link.title}>
					{link.title}
				</Link>
			))}
		</div>
	)
}

export default Links