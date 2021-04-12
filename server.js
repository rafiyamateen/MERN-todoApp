const express = require('express'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  app = express(),
  router = require('./routes')

dotenv.config()
const PORT = process.env.PORT,
  db_url = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.idn3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log('Database connected!'))
  .catch(error => { console.log('Database connection failed. Error: ', error) })

app.use(express.static('public'))
app.use(router)
app.get('*', (req, res) => {
  res.sendFile('public')
})
app.listen(PORT, () => { console.log(`Server started on port ${PORT}!`) })