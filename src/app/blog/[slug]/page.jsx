import Image from "next/image"
import { getPost } from "../../../../lib/data"

/*const getData = async (slug) => {
	const response = await fetch(`https://642ee23f2b883abc64198889.mockapi.io/poems/${slug}`)

	if (!response.ok) {
		throw new Error('Something went wrong')
	}

	return response.json()
}*/

export const generateMetadata = async ({ params }) => {

	const { slug } = params
	const post = await getPost(slug)

	return {
		title: post.title,
		description: post.text,
	}
};

const SinglePostPage = async ({ params }) => {

	const { slug } = params
	const post = await getPost(slug)

	return (
		<div className="p-8 bg-[rgba(0,0,0,0.3)] rounded-2xl mx-auto max-w-screen-xl lg:p-12">
			<div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-0">
				<div className="flex justify-center mt-6">
					<Image
						width={250}
						height={450}
						className="object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-r-none shadow-lg sm:h-96"
						src={`/images/postImg${post.poemID}.jpg`}
						alt="my_photo"
					/>
				</div>
				<div className="flex flex-col justify-center text-white p-6 rounded-b-lg lg:rounded-r-lg lg:rounded-l-none">
					<h3 className="text-2xl font-semibold sm:text-4xl mb-4">
						{post?.title}
					</h3>
					<div className="mb-4">
						<p className="text-sm font-medium">Автор:</p>
						<p className="font-semibold text-gray-400">
							{post?.author}
						</p>
					</div>
					<div className="space-y-2">
						<span className="text-xs text-gray-400">{post?.date}</span>
						<p className="text-white whitespace-pre-line">
							{post?.text}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SinglePostPage