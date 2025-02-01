// implementar middleware de tratamento de erro

export class HttpError extends Error {
  constructor(public status: number, message: string, error: string | unknown) {
    super(message);
  }
}
