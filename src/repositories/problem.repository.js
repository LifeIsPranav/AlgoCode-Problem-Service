const logger = require("../config/logger.config");
const InternalServerError = require("../errors/internalServer.error");
const NotFound = require("../errors/notFound.error");
const NotImplemented = require("../errors/notImplemented.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try{
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : []
      })

      return problem
    }
    catch(error){
      console.log(error)
      throw error
    }
  }

  async getAllProblems() {
    try{
      const problems = await Problem.find({})
      return problems;
    }
    catch(error){
      console.log(error)
      throw error
    }
  }

  async getProblem(id) {
    try{
      const problem = await Problem.findById(id)
      if(!problem){ 
        throw new NotFound("Problem", id)
      }
      return problem;
    }
    catch(error) {
      // console.log(error)
      throw error
    }
  }

  async deleteProblem(id) {
    try {
      const result = await Problem.deleteOne({_id: id})
      if(result.deletedCount == 0){ 
        logger.error(`Problem.repository: Problem with id: ${id} not found in the db`)
        throw new NotFound("Problem", id)
      }
      return result
    } 
    catch (error) {
      throw error
    }
  }

  async updateProblem(id, newProblemData) {
    try {
      const updateFields = Object.fromEntries(
        Object.entries(newProblemData).filter(([_, value]) => value !== undefined)
      )

      var result = await Problem.updateOne({_id: id}, updateFields)
      // console.log(result)
      // // if(result.acknowledged == false) throw new NotImplemented("Modification")
      // // if(result.matchedCount == 0) throw new NotFound("Problem", id)
      // // if(result.modifiedCount == 0) throw new NotImplemented("Modification")

      //! For the time being, lets return the new updated Object
      result = await Problem.findById(id)

      return result

    }
    catch (error) {
      throw error
    }
  }
  
}

module.exports = ProblemRepository