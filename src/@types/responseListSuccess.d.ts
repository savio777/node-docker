declare type IResponseList<T = object> = {
  status: number;
  data: {
    message: string;
    results: number;
  } & T;
};
