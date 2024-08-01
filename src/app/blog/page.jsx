import PostCard from "@/components/postCard/PostCard"
import { getPosts } from "../../../lib/data"

/*const getData = async () => {
	const response = await fetch('https://642ee23f2b883abc64198889.mockapi.io/poems')

	if (!response.ok) {
		throw new Error('Something went wrong')
	}

	return response.json()
}*/

const BlogPage = async () => {

	const posts = await getPosts()

	return (
		<section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
			<div className="container p-6 mx-auto space-y-8">
				<div className="space-y-2 text-center">
					<h2 className="text-3xl font-bold">Любимые стихотворения</h2>
					<p className="font-serif text-sm text-gray-600">в том числе и собственного сочинения</p>
				</div>
				<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
					{posts.map((post) => (
						<PostCard post={post} key={post.poemID} />
					))}
				</div>
			</div>
		</section>
	)
}

export default BlogPage