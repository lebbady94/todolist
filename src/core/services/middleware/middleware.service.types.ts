export interface IMiddlewareParams<B> {
  url: string;
  method: "GET" | "POST" | "PUT";
  body?: B; 
  index?: number;
}
