import { envMode } from "../app.js";



const errorMiddleware = async (err, req, res, next) => {

  const message = err || "Internal Server Error";
  const status = err.statusCode || 500;

  if (err.code === 11000) {
    const error = Object.keys(err.keyPattern).join(",")
    err.message = `Duplicate ${error}`;
    err.statusCode = 400;
  }

  if (err.name === "CastError") {
    const errorPath = err.path;
    err.message = `Invalid formate of ${errorPath}`;
    err.statusCode = 404;
  }

  return res.status(status).json({
    success: false,
    message: envMode === "DEVELOPMENT" ? err : err.message
  });

}

const TryCatch = (passedFunc) => async (req, res, next) => {
  try {
    await passedFunc(req, res, next)
  } catch (error) {
    next(error)
  }
}


export { errorMiddleware, TryCatch }