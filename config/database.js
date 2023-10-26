const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  
  console.log(`MongoDB Connected: ${conn.connection.host}`)
  return conn;  // return the connection object for potential future use
}

module.exports = connectDB