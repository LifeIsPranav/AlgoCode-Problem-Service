const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error")
const { ProblemRepository } = require("../repositories")
const { ProblemService } = require("../services");
const NotFound = require("../errors/notFound.error");

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

async function getProblem(req, res, next){
  try{
    const problem = await problemService.getProblem(req.params.id)
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: 'Success fetching the Problem',
      data: problem
    })
  }
  catch(error){
    next(error)
  }
}

async function getProblems(req, res, next){
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

async function deleteProblem(req, res, next){
  try{
    const id = req.params.id
    const result = await problemService.deleteProblem(id)

    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: `You Successfully delted Problem with Problem id ${id}!`,
      data: result
    })
  }
  catch(error){
    console.log("hi")
    // console.log(error)
    next(error)
  }
}

async function updateProblem(req, res, next){
  try{
    const newProblemData = req.body
    const id = req.params.id

    const response = await problemService.updateProblem(id, newProblemData)

    return res.status(StatusCodes.OK).json({
      success: true,
      message: `Successfully Modified Problem with id ${id}!`,
      error: {},
      data: newProblemData,
      "-------------" : "-------------",
      response: response
    })
  }
  catch(error){
    next(error)
  }
}

function pingProblemController(req, res, next){
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