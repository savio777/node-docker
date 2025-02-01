import { Express, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { postsPathsSwagger, postsSchemaSwagger } from "@/docs/postDocs";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API-Teste",
      version: "1.0.0",
      description: "Api teste",
    },
    components: {
      securitySchemes: {
        BarerAuth: {
          type: "http",
          scheme: "bearer",
        },
        UserAuth: {
          type: "http",
          scheme: "basic",
        },
      },
      schemas: { ...postsSchemaSwagger },
    },
    paths: { ...postsPathsSwagger },
  },
  apis: ["./src/controllers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app: Express) {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/swagger.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
