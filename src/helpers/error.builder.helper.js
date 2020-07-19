function errorHandler(err, req, res, next) {
  return res
    .status(err.status || 500)
    .json({ result: "failure", message: err.message });
}

module.exports = errorHandler;
