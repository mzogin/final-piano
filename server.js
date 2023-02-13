const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()
const nodemailer = require('nodemailer')
// const { dirname } = require('path')
// const { fileURLToPath } = require('url')

// const PORT = process.env.PORT || 3000
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
// const __dirname = dirname(fileURLToPath(import.meta.url))
// when ready to deploy (after build)
// !!!
//serve the frontend
app.use(express.static(path.resolve(__dirname, './client/build')))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: 'wrongpass',
    // pass: process.env.PASS,
  },
})

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`)
})

app.post('/send', function (req, res) {
  // !!important
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  let mailOptions = {
    from: `${email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${name}`,
    text: `${message}`,
  }

  //!old
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: 'fail',
      })
    } else {
      console.log('== Message Sent ==')
      res.json({
        status: 'success',
      })
    }
  })
})

// !!!
// only when ready to deploy
// let the react app handle any unknown routes
// serve up the index.html if express doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
