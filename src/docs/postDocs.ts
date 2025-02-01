import { Reference, Schema, Paths } from "swagger-jsdoc";

import { ErrorSwaggerDefault } from "@/helpers/exampleSwagger";

export const postsSchemaSwagger: {
  [key: string]: Reference | Schema;
} = {
  Post: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        example: "220c68471dd74313bae660b61ffba923",
      },
      title: {
        type: "string",
        example: "Title example",
      },
      description: {
        type: "string",
        example: "Description example",
      },
      created_at: {
        type: "date",
        example: "2025-01-30T20:38:06.414Z",
      },
      updated_at: {
        type: "date",
        example: "2025-01-30T20:38:06.414Z",
      },
    },
  },
  DataBodyCreatePost: {
    type: "object",
    properties: {
      title: {
        type: "string",
        example: "Title example",
      },
      description: {
        type: "string",
        example: "Description example",
      },
    },
  },
  ResponseCreatePost: {
    type: "object",
    properties: {
      status: {
        type: "number",
        example: "200",
      },
      data: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Message description error example",
          },
          post: {
            type: "object",
            $ref: "#/components/schemas/Post",
          },
        },
      },
    },
  },
  ResponseGetAllPosts: {
    type: "object",
    properties: {
      status: {
        type: "number",
        example: "200",
      },
      data: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Message description error example",
          },
          posts: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Post",
            },
          },
        },
      },
    },
  },
  ResponseErrorDefault: ErrorSwaggerDefault(),
};

export const postsPathsSwagger: Paths = {
  "/posts": {
    post: {
      tags: ["Post"],
      security: [
        {
          BarerAuth: [],
        },
      ],
      description: "Endpoint create post",
      summary: "Create a post",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DataBodyCreatePost",
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseCreatePost",
              },
            },
          },
        },
        "400": {
          description: "Bad request",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseErrorDefault",
              },
            },
          },
        },
      },
    },
    get: {
      tags: ["Post"],
      security: [
        {
          BarerAuth: [],
        },
      ],
      description: "Endpoint list all posts",
      summary: "List posts",
      responses: {
        "200": {
          description: "Created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseGetAllPosts",
              },
            },
          },
        },
        "400": {
          description: "Bad request",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseErrorDefault",
              },
            },
          },
        },
      },
    },
  },
  "/posts/{id}": {
    get: {
      tags: ["Post"],
      security: [
        {
          BarerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          example: "220c6847-1dd7-4313-bae6-60b61ffba923",
          in: "path",
          description: "Id post",
          schema: {
            type: "string",
          },
          required: true,
        },
      ],
      description: "Endpoint get details post by id",
      summary: "Get post by id",
      responses: {
        "200": {
          description: "Created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DataBodyCreatePost",
              },
            },
          },
        },
        "400": {
          description: "Bad request",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseErrorDefault",
              },
            },
          },
        },
      },
    },
    patch: {
      tags: ["Post"],
      security: [
        {
          BarerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          example: "220c6847-1dd7-4313-bae6-60b61ffba923",
          in: "path",
          description: "Id post",
          schema: {
            type: "string",
          },
          required: true,
        },
      ],
      description: "Endpoint edit a post by id",
      summary: "Edit post by id",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DataBodyCreatePost",
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseCreatePost",
              },
            },
          },
        },
        "400": {
          description: "Bad request",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseErrorDefault",
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ["Post"],
      security: [
        {
          BarerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          example: "220c6847-1dd7-4313-bae6-60b61ffba923",
          in: "path",
          description: "Id post",
          schema: {
            type: "string",
          },
          required: true,
        },
      ],
      description: "Endpoint delete a post by id",
      summary: "Delete a post by id",
      responses: {
        "200": {
          description: "Post Created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseCreatePost",
              },
            },
          },
        },
        "400": {
          description: "Bad request",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseErrorDefault",
              },
            },
          },
        },
      },
    },
  },
};
