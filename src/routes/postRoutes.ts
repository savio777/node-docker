import { Router } from "express";

import {
  createPost,
  deletePostById,
  getAllPosts,
  getPostById,
  updatePostById,
} from "@/controllers/postController";

const router = Router();

router.route("/").get(getAllPosts).post(createPost);

router
  .route("/:id")
  .get(getPostById)
  .patch(updatePostById)
  .delete(deletePostById);

export default router;
