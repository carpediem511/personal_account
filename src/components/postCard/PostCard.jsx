import Image from "next/image"
import Link from "next/link"

const PostCard = ({ post }) => {
	return (
		<div>
			<article className="flex flex-col h-full bg-gray-50 shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
				<div className="flex justify-center">
					<Image src='/images/postImg1.jpg' alt="my_photo" width={250} height={450} className="object-contain bg-gray-500" />
				</div>
				<h3 className="flex-1 py-2 text-center mt-6 text-lg font-semibold leading-snug">{post.title}</h3>
				<div className="flex flex-col flex-1 p-6">

					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
						<span>{post.date}</span>
						<span>прочитали {post.views}</span>
					</div>
					<div className="flex flex-1 p-6 justify-center self-end w-full text-sm underline">
						<Link href={`/blog/${post.id}`}>Открыть пост</Link>
					</div>
				</div>

			</article>
		</div>
	)
}

export default PostCard