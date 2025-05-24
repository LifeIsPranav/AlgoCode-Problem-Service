const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb")

const allowdTransport = []

// Below transport Configuration exables logging on Console
allowdTransport.push(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),

    // First argument to combine method is defining the timestamp we want!
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),

    // Second Argument -> How it is actually going to be printed!
    winston.format.printf((log) => `${log.timestamp} [${log.level}]: [${log.message}]`)

  )
})) 


// Below Transport configuration adds trasnsport via MongoDB Database
const mongoTransport = new winston.transports.MongoDB({
  level: 'error',
  db: LOG_DB_URL,
  collection: 'logs',
  // capped: true,
  // cappedMax: 4,
  // metaKey: winston.format.metadata()
})
allowdTransport.push(mongoTransport)


// This configuraion adds File configuration
allowdTransport.push(new winston.transports.File({
  filename: `logs/app.log`,

  format: winston.format.combine(

    // First argument to combine method is defining the timestamp we want!
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),

    // Second Argument -> How it is actually going to be printed!
    winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: [${log.message}]`)
  ),
}))



const logger = winston.createLogger({
  //  // Can add some default Formatting
  // format: winston.format.combine(

    // // First argument to combine method is defining the timestamp we want!
    // winston.format.timestamp({
    //   format: 'YYYY-MM-DD HH:mm:ss'
    // }),

    // // Second Argument -> How it is actually going to be printed!
    // winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: [${log.message}]`)
  // ),

  transports: allowdTransport
})

module.exports = logger