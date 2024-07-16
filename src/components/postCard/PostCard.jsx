import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
	return (
		<div>
			<article className="flex flex-col bg-gray-50 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
				<div className="flex justify-center">
					<Image src='/postImg1.jpg' alt="my_photo" width={250} height={450} className="object-contain bg-gray-500" />
				</div>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
				<div className="flex flex-1 p-6 justify-center text-sm underline">
					<Link href='/blog/post'>Открыть пост</Link>
				</div>
			</article>
		</div>
	)
}

export default PostCard