import { NextResponse } from "next/server"
import { makeConnectToDB } from "../../../../../lib/connectionDB"
import { Post } from "../../../../../lib/models"

export const GET = async (request, {params}) => {

	const {slug} = params
	try {
		makeConnectToDB()
		const post = await Post.findOne({slug})
		return NextResponse.json(post)
	} catch (error) {
		console.log(error)
	}
}

export const DELETE = async (request, {params}) => {

	const {slug} = params
	try {
		makeConnectToDB()
		await Post.deleteOne({slug})
		return NextResponse.json('Post deleted')
	} catch (error) {
		console.log(error)
	}
}