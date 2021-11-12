declare interface IHttpResponse<T> {
  okay: boolean;
  message: string;
  data: T | null;
}

declare type TUploadProgress = (progressEvent: ProgressEvent) => void;

declare module 'video-react';
