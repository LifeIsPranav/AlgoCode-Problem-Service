const { markdownSanitizer } = require("../utils")

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository
  }

  async createProblem(problemData) {
    // 1. Sanitize the markdown for description
    problemData.description = markdownSanitizer(problemData.description)

    const problem = await this.problemRepository.createProblem(problemData)
    return problem
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems()
    return problems
  }

  async getProblem(problemId) {
    const problem = await this.problemRepository.getProblem(problemId)
    return problem
  }

  async deleteProblem(problemId){
    const result = await this.problemRepository.deleteProblem(problemId)
    return result
  }

  async updateProblem(problemId, newProblemData){

    if(newProblemData.description)
      newProblemData.description = markdownSanitizer(newProblemData.description)
    const problem = await this.problemRepository.updateProblem(problemId, newProblemData)
    return problem
  }
}

module.exports = ProblemService