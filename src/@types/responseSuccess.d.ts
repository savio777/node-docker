declare type IResponse<T = object> = {
  status: number;
  data: {
    message: string;
  } & T;
};
