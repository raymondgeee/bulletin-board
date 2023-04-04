const mysql = require('mysql')

const dbConfig = {
    host : "localhost",
    user : "root",
    password : "",
    port : 3306,
    database : "orderingdatabase"
}

// const db = mysql.createConnection(dbConfig)
const db = mysql.createPool(dbConfig)

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, sql) => {
            if (err) {
                console.log("Database Error :", err)
                reject(err)
            } else {
                sql.query(query, (error, results) => {
                    if (error) {
                        console.log("Query Error :", error)
                        reject(error)
                    } else {
                        resolve(results)
                    }
                    sql.release()
                })
            }
        })
    })
}