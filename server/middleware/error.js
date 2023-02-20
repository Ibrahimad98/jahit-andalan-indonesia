async function errors(error, req, res, next) {
  // console.log(error, "INI DI ERROR HANDLER");
  let name = error.name;
  let code;
  let message;
  switch (name) {
    case "SequelizeValidationError":
      code = 400;
      message = error.errors[0].message;
      break;
    // bad_request_login
    case "SequelizeUniqueConstraintError":
      code = 400;
      message = error.errors[0].message;
      break;
    case "bad_request_login":
      code = 400;
      message = "input username and password for login";
      break;
    case "invalid_credentials":
      code = 401;
      message = "Invalid username or password";
      break;
    // JsonWebTokenError
    case "JsonWebTokenError":
      code = 401;
      message = "Please Login First";
      break;
    case "AxiosError":
      code = 401;
      message = "Error in processing axios";
      break;
    default:
      code = 500;
      message = "Internal Server Error";
      break;
  }
  res.status(code).json({ message });
}

module.exports = errors;
