const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const methodOverride = require("method-override")
const flash = require('express-flash')
const logger = require('morgan')
const cors = require('cors')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const itemRoutes = require('./routes/items')
const shootRoutes = require('./routes/shoots')
const shotRoutes = require('./routes/shots')

// Use .env file in config folder
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)


// Connect to database and then start the server
connectDB()
    .then(() => {
        // Only start listening once the database connection is established
        app.listen(process.env.PORT, () => {
            console.log('Server is running, you better catch it!')
        })
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err)
        process.exit(1)  // Exit the process with a failure code
    })

app.use(cors({
  origin: (origin, callback) => callback(null, true),
  credentials: true
}))

//status folder
app.use(express.static('frontend/build'))

// Body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Logging
app.use(logger('dev'))

// Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/api/items', itemRoutes)
app.use('/api/shoots', shootRoutes)
app.use('/api/shots', shotRoutes)

app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});