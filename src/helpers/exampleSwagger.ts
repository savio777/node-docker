export const exampleSuccessSwagger = () => ({
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
        // add others properties here
      },
    },
  },
});

export const ErrorSwaggerDefault = () => ({
  type: "object",
  properties: {
    status: {
      type: "number",
      example: "200",
    },
    message: {
      type: "string",
      example: "Message description error example",
    },
    error: {
      type: "string",
      example: "Error description example",
    },
  },
});
