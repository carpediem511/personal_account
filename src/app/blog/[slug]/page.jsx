import Image from "next/image"

const SinglePostPage = () => {
	return (
		<div className="px-4 py-16 mx-auto max-w-screen-xl lg:py-20">
			<div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0">
				<div className="flex justify-center">
					<Image
						width={250}
						height={450}
						className="object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-r-none shadow-lg sm:h-96"
						src="/postImg1.jpg"
						alt="my_photo"
					/>
				</div>
				<div className="flex flex-col justify-center text-white p-6 bg-[rgba(0,0,0,0.5)] rounded-b-lg lg:rounded-r-lg lg:rounded-l-none">
					<h3 className="text-2xl font-semibold sm:text-4xl mb-4">
						Noster tincidunt reprimique ad pro
					</h3>
					<div className="mb-4">
						<p className="text-sm font-medium">Author</p>
						<p className="font-semibold text-gray-400">
							Andrew Larkin
						</p>
					</div>
					<div className="space-y-2">
						<span className="text-xs text-gray-400">February 19, 2021</span>
						<p className="text-gray-300">
							Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SinglePostPage