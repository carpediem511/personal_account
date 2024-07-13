import Link from "next/link"

const Footer = () => {
	return (
		<>
			<footer className="text-white rounded-lg shadow m-4">
				<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
					<span className="text-sm sm:text-center">© 2024
						<Link href="/" className="hover:underline"> "Momentum"</Link>. Все права защищены.
					</span>
					<ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
						<li>
							<Link href="#" className="hover:underline me-4 md:me-6">
								Политика конфиденциальности
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline me-4 md:me-6">
								Условия использования
							</Link>
						</li>
						<li>
							<Link href="#" className="hover:underline">
								Контакты
							</Link>
						</li>
					</ul>
				</div>
			</footer>
		</>
	)
}

export default Footer