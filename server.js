const express = require('express')
// const router = express.Router()
const path = require('path')
const cors = require('cors')
const nodemailer = require('nodemailer')
// const { dirname } = require('path')
// const { fileURLToPath } = require('url')

const PORT = process.env.PORT || 5000

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
// const __dirname = dirname(fileURLToPath(import.meta.url))
// when ready to deploy (after build)
// !!!
//serve the frontend
app.use(express.static(path.resolve(__dirname, './client/build')))

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })

// ??
// app.use('/', router)

// NEW
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
    // from: `${req.body.mailerState.email}`,
    // to: process.env.EMAIL,
    // subject: `Message from: ${req.body.mailerState.email}`,
    // text: `${req.body.mailerState.message}`,
  }

  // let mailOptions = {
  //   from: 'test@gmail.com',
  //   to: process.env.EMAIL,
  //   subject: 'Nodemailer API',
  //   text: 'Hi from your nodemailer API',
  // }

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
// END NEW

// serve up production assets
// app.use(express.static('client/build'))

// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
// const path = require('path')
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })

//

// app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))

// ???
// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'mdzogin@gmail.com',
//     pass: 'ybepcuwgpmkzunhu',
//   },
// })

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('Ready to Send')
//   }
// })

// /contact
// ???
// router.post('/message', (req, res) => {
//   const name = req.body.name
//   const email = req.body.email
//   const message = req.body.message
//   const mail = {
//     from: name,
//     to: 'mdzogin@gmail.com',
//     subject: 'Contact Form Submission',
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   }
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: 'ERROR' })
//     } else {
//       res.json({ status: 'Message Sent' })
//     }
//   })
// })

// !!!
// only when ready to deploy
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

// app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))

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
