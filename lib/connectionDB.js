import mongoose from "mongoose"

const connection = {}

export const makeConnectToDB = async () => {
  console.log('check1', process.env.MONGO_URL)
  try {
    if (connection.isConnected) {
      console.log('Using existing connection')
      return
    }
    if (mongoose.connections.length > 0) {
      const existingConnection = mongoose.connections[0].readyState
      if (existingConnection === 1) {
        console.log('Already connected')
        return;
      }
      await mongoose.disconnect()
    }
    const db = await mongoose.connect(process.env.MONGO_URL)
    connection.isConnected = db.connections[0].readyState
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message)
    throw new Error(error)
  }
  console.log('check2', process.env.MONGO_URL)
}


