const NotImplemented = require("../errors/notImplemented.error")

function addProblem(req, res, next){
  try{
    // return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    //   msg: "Not Implemented!"
    // })

    throw new NotImplemented('add Problem!')
  }
  catch(error){
    next(error)
  }
}

function getProblem(req, res){
  try{
    throw new Error("broooo")
  }
  catch(err){
    next()
  }
  // return res.status(StatusCodes.NOT_IMPLEMENTED).json({
  //   msg: "Not Implemented!"
  // })
}

function getProblems(req, res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg: "Not Implemented!"
  }) 
}

function deleteProblem(req, res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg: "Not Implemented!"
  })
}

function updateProblem(req, res){
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    msg: "Not Implemented!"
  })
}

function pingProblemController(req, res){
  res.json({
    msg: "Successfully reached Problem Controller"
  })
}



module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController
}