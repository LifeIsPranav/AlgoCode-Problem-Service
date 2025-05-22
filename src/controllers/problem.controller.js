const NotImplemented = require("../errors/notImplemented.error")

function addProblem(req, res, next){
  try{
    throw new NotImplemented('add Problem!')
  }
  catch(error){
    next(error)
  }
}

function getProblem(req, res){
  try{
    throw new NotImplemented('add Problem!')
  }
  catch(error){
    next(error)
  }
}

function getProblems(req, res){
  try{
    throw new NotImplemented('add Problem!')
  }
  catch(error){
    next(error)
  } 
}

function deleteProblem(req, res){
  try{
    throw new NotImplemented('add Problem!')
  }
  catch(error){
    next(error)
  }
}

function updateProblem(req, res){
  try{
    throw new NotImplemented('add Problem!')
  }
  catch(error){
    next(error)
  }
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