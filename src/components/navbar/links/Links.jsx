'use client'

import { useState } from "react"
import NavLink from "./navLink/navLink"

const links = [
	{
		title: "Домой",
		path: "/",
	},

	{
		title: "О сервисе",
		path: "/about",
	},

	{
		title: "Лента",
		path: "/blog",
	},

	{
		title: "Играть",
		path: "/game",
	},

	{
		title: "Медиа",
		path: "/media",
	},
]

const Links = () => {

	const [openMenu, setOpenMenu] = useState(false)

	let session = true
	let isAdmin = true

	return (
		<div>
			<div className="hidden md:flex">
				{links.map((link) => (
					<NavLink item={link} key={link.title} />
				))}

				{session ? (
					<>
						{isAdmin && <NavLink item={{ title: 'Администратор', path: '/admin' }} />}
						<button className="p-2.5 cursor-pointer font-bold rounded-xl bg-purple-800">Выйти</button>
					</>
				) : (
					<NavLink item={{ title: 'Войти', path: '/login' }} />
				)
				}
			</div>
			<button className="flex cursor-pointer md:hidden" onClick={() => setOpenMenu((prev) => !prev)} >Меню</button>
			{
				openMenu && (
					<div className="absolute top-24 right-0 w-1/2 h-max bg-purple-900 flex flex-col items-center justify-center gap-3">
						{links.map((link) => (
							<NavLink item={link} key={link.title} />
						))}
					</div>
				)
			}
		</div>
	)
}

export default Links