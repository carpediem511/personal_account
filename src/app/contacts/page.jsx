export const metadata = {
	title: "Контакты",
	description: "Свяжитесь с командой Momentum для поддержки и вопросов. Узнайте, как наш цифровой помощник может помочь вам управлять финансами, планировать дела и наслаждаться любимыми развлечениями. Все наши контакты в одном месте.",
};

const Contacts = () => {
	console.log('it works')
	return (
		<>
			<section className="py-6 dark:bg-gray-100 dark:text-gray-900">
				<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
					<div className="py-6 md:py-0 md:px-6">
						<h1 className="text-4xl font-bold">Связаться с нами</h1>
						<p className="pt-2 pb-4">
							Это контактные данные нашей компании, вы можете связаться с нами напрямую. Или оставить обращение через форму
						</p>
						<div className="space-y-4">
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
								</svg>
								<span>г. Санкт-Петербург </span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span>+7 911 715 ** **</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
								<span>vampire.0514@gmail.com</span>
							</p>
						</div>
					</div>
					<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
						<label className="block">
							<span className="mb-1">Ваше имя</span>
							<input type="text" placeholder="Аркадий" className="block w-full rounded-md text-gray-700 p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-purple-500" />
						</label>
						<label className="block">
							<span className="mb-1">Адрес электронной почты</span>
							<input type="email" placeholder="volozh@yandex.ru" className="block w-full rounded-md text-gray-700 p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-purple-500" />
						</label>
						<label className="block">
							<span className="mb-1">Ваше обращение</span>
							<textarea rows="3" className="block w-full rounded-md text-gray-700 p-2 shadow-md focus:ring-2 focus:outline-none focus:ring-purple-500"></textarea>
						</label>
						<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75  focus:ring-purple-600 hover:ring-purple-600">
							Отправить
						</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default Contacts