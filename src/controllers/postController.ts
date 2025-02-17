import { NextFunction, Request, Response } from "express";

import Post from "@/models/postModels";
import variables from "@/config/variables";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await Post.find();

    const response: IResponseList<{ posts: IPost[] }> = {
      status: 200,
      data: {
        message: "Posts list",
        posts,
        results: posts.length,
      },
    };

    res.status(200).json(response);
  } catch (error: any) {
    const response: IResponseError = {
      status: 400,
      message: "Error on get posts list",
      error: error?.message || "Error",
    };

    res.status(400).json(response);
  }
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params?.id) {
      throw new Error("Id is required");
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new Error("Post not found");
    }

    const response: IResponse<{ post: IPost | null }> = {
      status: 200,
      data: {
        message: "Post details by id",
        post,
      },
    };

    res.status(200).json(response);
  } catch (error: any) {
    const response: IResponseError = {
      status: 400,
      message: "Error on get post details by id",
      error: error?.message || "Error",
    };

    res.status(400).json(response);
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await Post.create(req.body);

    const response: IResponse<{ post: IPost }> = {
      status: 200,
      data: {
        message: "Posts created",
        post,
      },
    };

    res.status(200).json(response);
  } catch (error: any) {
    const response: IResponseError = {
      status: 400,
      message: "Error on create posts",
      error: error?.message || "Error",
    };

    res.status(400).json(response);
  }
};

export const deletePostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params?.id) {
      throw new Error("Id is required");
    }

    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      throw new Error("Post not found");
    }

    const response: IResponse<{ post: IPost | null }> = {
      status: 200,
      data: {
        message: "Post deleted by id",
        post,
      },
    };

    res.status(200).json(response);
  } catch (error: any) {
    const response: IResponseError = {
      status: 400,
      message: "Error on post deleted by id",
      error: error?.message || "Error",
    };

    res.status(400).json(response);
  }
};

export const updatePostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.params);

    if (!req.params?.id) {
      throw new Error("Id is required");
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      throw new Error("Post not found");
    }

    post!.updated_at = new Date();

    post.save();

    const response: IResponse<{ post: IPost | null }> = {
      status: 200,
      data: {
        message: "Post update by id",
        post,
      },
    };

    res.status(200).json(response);
  } catch (error: any) {
    const response: IResponseError = {
      status: 400,
      message: "Error on post update by id",
      error: error?.message || "Error",
    };

    res.status(400).json(response);
  }
};
