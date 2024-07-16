import PostCard from "@/components/postCard/PostCard"

const BlogPage = () => {
	return (
		<section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
			<div className="container p-6 mx-auto space-y-8">
				<div className="space-y-2 text-center">
					<h2 className="text-3xl font-bold">Любимые стихотворения</h2>
					<p className="font-serif text-sm text-gray-600">собственного сочинения</p>
				</div>
				<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</section>
	)
}

export default BlogPage