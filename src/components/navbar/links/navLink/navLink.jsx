'use client'

import Link from "next/link"
import styles from './navLink.module.css'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const NavLink = ({ item }) => {

	const [isClient, setIsClient] = useState(false)
	const pathName = usePathname()

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<Link href={item.path} key={item.title} className={`${styles.container} ${isClient && pathName === item.path ? styles.active : ''}`}>
			{item.title}
		</Link>
	)
}

export default NavLink