declare type IResponseError<T = object> = {
  status: number;
  message: string;
  error: string | unknown;
} & T;
