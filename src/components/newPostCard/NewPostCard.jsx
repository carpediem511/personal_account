import { Calendar, Database, Feather, Image, Key, Type, User } from "react-feather"
import { addPost } from "../../../lib/action"

const NewPostCard = () => {

	return (
		<>
			<form action={addPost} className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
				<div className="space-y-4">
					<div className="flex flex-col gap-2">
						<label className="flex items-center gap-2 rounded-md p-2">
							<Type className="h-5 w-5 text-gray-600" />
							<input
								type="text"
								name="title"
								className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="Название"
							/>

						</label>
						<textarea
							className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
							placeholder="Текст стихотворения"
							name="text"
							rows="4"
						></textarea>
						<label className="flex items-center gap-2 rounded-md p-2">
							<User className="h-5 w-5 text-gray-600" />
							<input
								type="text"
								name="author"
								className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="Автор"
							/>
						</label>
						<label className="flex items-center gap-2  rounded-md p-2">
							<Calendar className="h-5 w-5 text-gray-600" />
							<input
								type="text"
								name="date"
								className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="Дата написания"
							/>

						</label>
						<label className="flex items-center gap-2 rounded-md p-2">
							<Key className="h-5 w-5 text-gray-600" />
							<input
								type="text"
								name="poemID"
								className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="poemID"
							/>

						</label>
						<label className="flex items-center gap-2  rounded-md p-2">
							<Key className="h-5 w-5 text-gray-600" />
							<input
								type="text"
								name="slug"
								className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="slug"
							/>

						</label>

						{/*
						<label className="flex items-center gap-2  rounded-md p-2">
							<Image className="h-5 w-5 text-gray-600" />
							<input
								type="file"
								name="img"
								className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
								placeholder="Изображение"
							/>
						</label>*/}
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-purple-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
					>
						<Feather className="h-5 w-5" />
						Добавить
					</button>
				</div>
			</form>

		</>
	)
}

export default NewPostCard