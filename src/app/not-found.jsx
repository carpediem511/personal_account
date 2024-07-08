import Link from "next/link"

const NotFound = () => {
	return (
		<div>
			<h1>ERROR 404</h1>
			<Link href='/'>Вернуться домой</Link>
		</div>
	)
}

export default NotFound