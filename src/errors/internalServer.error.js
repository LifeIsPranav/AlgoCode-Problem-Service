const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class InternalServerError extends BaseError {
  constructor(details){
    super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR, 'Something when wrong', details)
  }
}

module.exports = InternalServerError