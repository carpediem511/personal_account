'use client'

import styles from '@/app/about/styles.module.css'
import { useState } from 'react';

const slides = [
	{
		title: 'Не бойся перемен! Они и есть жизнь!',
		path: '/bridge.jpg',
	},
	{
		title: 'Создавай жизнь своей мечты!',
		path: '/carnival.jpg',
	},
	{
		title: 'Всё в своей жизни выбирай по любви!',
		path: '/cars.jpg',
	},
	{
		title: 'Внутри тебя есть сила. Она ведёт тебя к мечте.',
		path: '/children.jpg',
	},
	{
		title: 'Будь для себя той любовью и заботой, которую ты так ищешь.',
		path: '/pineapple.jpg',
	},
	{
		title: 'Путешествуйте! Деньги возвращаются, а время - никогда!..',
		path: '/took.jpg',
	},
]

const AboutPage = () => {

	const [activeSlide, setActiveSlide] = useState(0)

	const handleSlideClick = (index) => {
		setActiveSlide(index)
	}

	return (
		<>
			<div className="flex flex-col w-full">
				<h2 className={styles.additionalFont}>Все важные данные, развлечения и возможности под рукой!</h2>
				<div className={styles.slideContainer}>
					{slides.map((slide, index) => (

						<div
							key={index}
							className={`${styles.slide} ${activeSlide === index ? styles.active : ''}`}
							onClick={() => handleSlideClick(index)}
							style={{ backgroundImage: `url(${slide.path})` }}
						>
							<h3>{slide.title}</h3>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default AboutPage





