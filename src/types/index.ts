export default class CustomError extends Error {
  response?: {
    data: any;
  };
}
