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

    res.status(200).json({
      status: 200,
      data: {
        message: "Posts list",
        posts,
        results: posts.length,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Error on get posts list",
      error: variables.NODE_ENV === "development" ? error : "Error",
    });
  }
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params?.id) {
      throw new Error("Id is required");
    }

    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: 200,
      data: {
        message: "Post details by id",
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Error on get post details by id",
      error: variables.NODE_ENV === "development" ? error : "Error",
    });
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);

    const post = await Post.create(req.body);

    res.status(200).json({
      status: 200,
      data: {
        message: "Posts created",
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Error on create posts",
      error: variables.NODE_ENV === "development" ? error : "Error",
    });
  }
};

export const deletePostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params?.id) {
      throw new Error("Id is required");
    }

    const post = await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 200,
      data: {
        message: "Post deleted by id",
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Error on post deleted by id",
      error: variables.NODE_ENV === "development" ? error : "Error",
    });
  }
};

export const updatePostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.params?.id) {
      throw new Error("Id is required");
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 200,
      data: {
        message: "Post update by id",
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: "Error on post update by id",
      error: variables.NODE_ENV === "development" ? error : "Error",
    });
  }
};
