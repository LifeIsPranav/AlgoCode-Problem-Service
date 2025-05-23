const mongoose = require("mongoose")

const problemSchema = new mongoose.Schema({
  title: {        // title of Problem
    type: String,
    required: [true, 'Title Cannot be Empty!']
  },

  description: {  // Description
    type: String,
    required: [true, 'Description Cannot be Empty!']
  },

  difficulty: {   // Difficulty
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Easy',
    required: [true, 'Difficulty Cannot be Empty!']
  },

  testCases: [    // Test Cases
    {
      input: {
        type: String,
        required: true
      },
      output: {
        type: String,
        required: true
      }
    }
  ],

  editorial: {    // Editorial
    type: String,
    required: true
  }
})

// Used when we need to use the model in pgm (used to query the existing db)
const Problem = mongoose.model('Problem', problemSchema)

module.exports = Problem