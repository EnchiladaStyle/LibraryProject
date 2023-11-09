const mysql = require('mysql');


function addBook(req, res){
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

    let sqlString = `INSERT INTO Book (Book_name, Publish_date, Library_id, Author_id, Genre_id) VALUES('${String(req.body.Book_name)}', '${String(req.body.Publish_date)}', ${req.body.Library_id}, ${req.body.Author_id}, ${req.body.Genre_id});`

    
    db.query(sqlString);

    res.status(200).json({
        message: 'it worked'
    });
}


function deleteBook(req, res){

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

    let sqlString = `DELETE FROM Book WHERE Book_id = ${req.body.Book_id}`

    
    db.query(sqlString);

    res.status(200).json({
        message: 'it worked'
    });

}

module.exports = {
    addBook: addBook,
    deleteBook: deleteBook
}
