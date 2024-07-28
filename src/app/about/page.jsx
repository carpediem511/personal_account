'use client'

import styles from '@/app/about/styles.module.css'
import { useState, useEffect } from 'react';

const slides = [
	{
		title: 'Не бойся перемен! Они и есть жизнь!',
		path: '/images/bridge.jpg',
	},
	{
		title: 'Создавай жизнь своей мечты!',
		path: '/images/carnival.jpg',
	},
	{
		title: 'Всё в своей жизни выбирай по любви!',
		path: '/images/cars.jpg',
	},
	{
		title: 'Внутри тебя есть сила. Она ведёт тебя к мечте.',
		path: '/images/children.jpg',
	},
	{
		title: 'Будь для себя той любовью и заботой, которую ты так ищешь.',
		path: '/images/pineapple.jpg',
	},
	{
		title: 'Путешествуйте! Деньги возвращаются, а время - никогда!..',
		path: '/images/took.jpg',
	},
]

const AboutPage = () => {

	const [activeSlide, setActiveSlide] = useState(-1)

	useEffect(() => {
		// Устанавливаем активный слайд после того, как компонент смонтирован на клиенте
		setActiveSlide(0)
	}, [])

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





