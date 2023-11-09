const mysql = require('mysql');


function addAuthor(req, res){
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'apple123',
        database: 'librarySQL'
    });
    
    db.connect((err) => {
        if(err){
            throw err;
        }

    })

    let sqlString = `INSERT INTO Author (Author_fname, Author_lname) VALUES('${String(req.body.Author_fname)}', '${String(req.body.Author_lname)}');`

    
    db.query(sqlString);

    res.status(200).json({
        message: 'it worked'
    });
}


function deleteAuthor(req, res){

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'apple123',
        database: 'librarySQL'
    });
    
    db.connect((err) => {
        if(err){
            throw err;
        }

    })

    let sqlString = `DELETE FROM Author WHERE Author_id = ${req.body.Author_id}`

    
    db.query(sqlString);

    res.status(200).json({
        message: 'it worked'
    });

}

module.exports = {
    addAuthor: addAuthor,
    deleteAuthor: deleteAuthor
}
