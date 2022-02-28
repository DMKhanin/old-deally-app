class AppError {
  statusCode = 400;

  constructor(statusCode = 400) {
    console.log(statusCode);
    this.statusCode = statusCode;
  }
}

export default AppError;