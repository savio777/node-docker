import mongoose from "mongoose";

const postSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: [true, "Post must have a 'title'"],
  },
  description: {
    type: String,
    required: [true, "Post must have a 'description'"],
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
