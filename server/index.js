const express = require('express')
const bodyParser = require('body-parser')
const sqlite = require('sqlite3').verbose();
// const db = require('./database/table')
// const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database/data.sqlite3')

const app = express();

app.use(bodyParser.json())

// db.run(
//     'INSERT INTO user (name, age, email) VALUES (?, ?, ?)',
//     [ 'wisdom woke', '60', 'wisdomwokedev@gmail.com' ],

//     function (err) {
//     if (err){
//         console.log(err)
//     } else {
//         console.log('Data inserted succefully')
//     }
// }
// )

///////////////////////////////
// DATABASE INIT
// const db = new sqlite.Database(
//     '.database/data.db',
//     sqlite.OPEN_READWRITE, (err) => {
//     if (err){
//         return console.log(err);
//     }
// })

app.post('/post', async (req, res) => {
    console.log('Hello There')

    try{


        const { movie, quote, character } = req.body;

        // const sql = "INSERT INTO quote(movie, quote, character) VALUES (?,?,?)";
        // db.run(sql, [ movie, quote, character ], (error) => {
        //     if(error) {
        //         return res.status(300)
        //         .json({
        //             status:'Failed',
        //             error
        //         })
        //     }
        //     console.log("Success", movie, quote, character)
        // } )

        // const movie = req.body.movie
        console.log({movie})
        return res.status(200)
        .json({
            status:'success',
            movie: req.body
        })
    } catch(error) {
        console.log(error)
       return res.status(400)
        .json({
            status:'failed',
            message: error.message
        })
    }
})

app.get('/all',async (req,res) => {
    try{
        db.all(
            'SELECT * FROM user',
            function (err, row){
                if(err){
                    return res.status(300)
                    .json({
                        status: 'failed',
                        error: err
                    })
                } else{
                    return res.status(200)
                    .json({
                        status:'success',
                        data: row
                    })
                }
            }
        )
    } catch (error) {
        res.status(300)
        .json({
            status:'fail',
            error: error
        })
    }
    
})

app.listen(3001, () => {
    console.log('Application is running at port 3001')
})