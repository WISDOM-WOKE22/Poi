const express = require('express')
const bodyParser = require('body-parser')

// Routes
const userRoute = require('./routes/userRoute')

const app = express();

app.use(bodyParser.json())

app.use('/api/users', userRoute)

app.use('/api', (req, res) => [
    res.status(200)
    .json({
        status:'success',
        message:"WELCOME TO OUR API"
    })
])

app.use('*', (request, response) => {
    response.status(404)
    .json({
        status:'fail',
        message:'Route not defined'
    })
})


app.listen(3001, () => {
    console.log('Application is running at port 3001')
})