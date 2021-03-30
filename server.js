const express = require('express'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  app = express(),
  router = require('./routes')

dotenv.config()

const db_url = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.idn3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log('Database connected!'))
  .catch(error => { console.log('Database connection failed. Error: ', error) })

if (process.env.NODE_ENV === 'poduction') {
  app.use(express.static('client/build'))
}
app.use(router)
app.listen(process.env.PORT,()=>{console.log(`Server started on port ${process.env.PORT}!`)})