const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError {
  constructor(resourceName, resourceValue){
    super("NotFound", StatusCodes.NOT_FOUND, `$Requested Resource ${resourceName} with value: ${resourceValue} not found!`, {
      resourceName, 
      resourceValue
    })
  }
}

module.exports = NotFound