import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
	return (
		<div className="max-w-md flex mx-auto my-8">
			<article className="flex flex-col bg-gray-50 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
				<div className="flex justify-center p-4 h-96 overflow-hidden">
					<Image
						src={`/images/postImg${post.id}.jpg`}
						alt="my_photo"
						width={250}
						height={400}
						priority
						className="object-contain"
					/>
				</div>
				<div className="p-4 flex-grow">
					<div className="h-16 flex items-center justify-center mb-4">
						<h3 className="text-center text-lg font-semibold gap-10 leading-snug">{post.title}</h3>
					</div>
					<span className="text-md mb-2 text-gray-600 font-caveat">{post.author}</span>
					<div className="flex justify-between text-xs text-gray-600 mb-4">
						<span>{post.date}</span>
						<span>Просмотры: {post.views} раз(а)</span>
					</div>
				</div>
				<div className="text-center flex justify-center items-end py-4">
					<Link href={`/blog/${post.poemID}`}>
						<p className="text-gray-600 underline">Открыть пост</p>
					</Link>
				</div>
			</article>
		</div>
	);
};

export default PostCard;
