'use server'

import { revalidatePath } from "next/cache"
import { makeConnectToDB } from "./connectionDB"
import { Post } from "./models"

export const addPost = async(formData) => {


	const {title, text, author, date, slug, poemID} = Object.fromEntries(formData)

	try {
		makeConnectToDB()
		const newPost = new Post({
			title, text, author, date, slug, poemID
		})
		await newPost.save()
		console.log('save to db')
		revalidatePath('/blog')
	} catch (error) {
		console.log(error)
		return{error: "Что-то пошло не так..."}
	}
	
}

export const deletePost = async(formData) => {


	const {id} = Object.fromEntries(formData)

	try {
		makeConnectToDB()
		await Post.findByIdAndDelete(id)
		console.log('deleted of db')
		revalidatePath('/blog')
	} catch (error) {
		console.log(error)
		return{error: "Что-то пошло не так..."}
	}
	
}