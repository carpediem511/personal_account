import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  poemID: {
    type: String,
    required: true,
  },
    poemID: {
    type: String,
    required: true,
  },
    slug: {
    type: String,
    required: true,
  },
    date: {
    type: String,
    required: true,
  },
    views: {
    type: String,
    required: true,
  },
    author: {
    type: String,
    required: true,
    unique: true,
  }
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model('User', userSchema)
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema)
