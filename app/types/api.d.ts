declare global {
  type ApiResponse = {
    id?: number;
    statusCode?: number;
    message: string;
  };
}
export {};
