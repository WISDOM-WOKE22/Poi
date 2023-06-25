const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database(
    './data.db',
    sqlite.OPEN_READWRITE, (err) => {
    if (err){
        return console.log(err);
    }
})

const user = `CREATE TABLE user(ID INT PRIMARY KEY, username UNIQUE, password)`;

const pointOfInterest = `CREATE TABLE poi (ID INT PRIMARY KEY, name VARCHAR(255), type VARCHAR(255), country VARCHAR(255), region VARCHAR(255), lon FLOAT, lat FLOAT, description TEXT, recommendations INT )`;

const reviews = `CREATE TABLE reviews (ID INT PRIMARY KEY, poi_id INT, review TEXT)`;

db.run(pointOfInterest)

// module.exports = db;