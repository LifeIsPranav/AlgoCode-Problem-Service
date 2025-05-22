function addProblem(req, res){
  return res.status(501).json({
    msg: "Not Implemented!"
  })
}

function getProblem(req, res){
  return res.status(501).json({
    msg: "Not Implemented!"
  })
}

function getProblems(req, res){
  return res.status(501).json({
    msg: "Not Implemented!"
  })
}

function deleteProblem(req, res){
  return res.status(501).json({
    msg: "Not Implemented!"
  })
}

function updateProblem(req, res){
  return res.status(501).json({
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