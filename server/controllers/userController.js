const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('../datebase/data.sqlite3')

exports.createUser = async (req, res) => {
    try{
        const {username, password } = req.body 
        db.run(
            'INSERT INTO user (username, password)',
            [ username, password ],
            function(error){
                if(error){
                    return res.status(500)
                    .json({
                        status:'failed',
                        message:"Could not create user"
                    })
                } else {
                    return res.status(201)
                    .json({
                        status:'success',
                        user: username
                    })
                }
            }
        )
    } catch (error){
        res.status(400)
        .json({
            status:'failed',
            message:error
        })
    }
}

exports.getAUser = async (req, res) => {
    try{
        
    } catch(error) {
        res.status(400)
        .json({
            status:'failed',
            message:error
        })
    }
}
exports.login = async (req, res) => {
    try{
        const { username, password } = req.body
        db.query(
            'SELECT FROM user WHERE username = ?  AND password = ?',
            [ username, password ],
            (error, data) => {
                if(error){
                    return res.status(401)
                    .json({
                        status:'success',
                        message: "could not login"
                    })
                }
                if(data){
                    return res.status(200)
                    .json({
                        status: 'success',
                        user: data
                    })
                }
            }
        )
    } catch (error){
        res.status(400)
        .json({
            status:'failed',
            message:error
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try{
        db.all( 'SELECT * FROM user',
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

    } catch(error){
        res.status(400)
        .json({
            status:'failed',
            message:error
        })
    }
}

