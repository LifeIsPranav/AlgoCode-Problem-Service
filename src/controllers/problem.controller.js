const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error")
const { ProblemRepository } = require("../repositories")
const { ProblemService } = require("../services")

const problemService = new ProblemService(new ProblemRepository())

async function addProblem(req, res, next){
  try{
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new Problem!",
      error: {},
      data: newProblem
    })
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

async function getProblems(req, res){
  try{
    const response = await problemService.getAllProblems();
    return  res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all Problems!",
      error: {},
      data: response
    })
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