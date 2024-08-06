import { NextResponse } from "next/server"
import { makeConnectToDB } from "../../../../lib/connectionDB"
import { Post } from "../../../../lib/models"

export const GET = async (request) => {
	try {
		makeConnectToDB()
		const posts = await Post.find()
		return NextResponse.json(posts)
	} catch (error) {
		console.log(error)
	}
}