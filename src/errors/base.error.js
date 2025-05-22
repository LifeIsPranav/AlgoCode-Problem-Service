class BaseError extends Error {
  constructor(name, statusCode, description, details){
    super(description);
    this.name = name
    this.statusCode = statusCode
    this.details = details

    // Error.captureStackTrace(this) //! -> Automatically Attached, no need!

    // console.log("-------------------")
    // console.log(this.stack)
  }
}

module.exports = BaseError