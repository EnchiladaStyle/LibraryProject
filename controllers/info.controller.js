const mysql = require('mysql');


function getAllBooks(req, res){
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

    let sqlString = `Select b.Book_name, b.Publish_date, g.Genre_name, a.Author_fname, a.Author_lname 
    FROM Book b 
    INNER JOIN Author a ON b.Author_id = a.Author_id 
    INNER JOIN Genre g ON b.Genre_id = g.Genre_id;`

    
    db.query(sqlString, (err, results) => {
        res.status(200).json({
            books: results
        })
    })
}



function searchByAuthorID(req, res){
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

    let sqlString = `Select Book_name FROM Book WHERE Author_id = ${req.body.Author_id};`

    
    db.query(sqlString, (err, results) => {
        res.status(200).json({
            books: results
        })
    })
}

function editBook(req, res){

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
    
    let sqlString = `UPDATE Book SET Book_name = '${String(req.body.Book_name)}', Publish_date = '${String(req.body.Publish_date)}', Author_id = ${req.body.Author_id}, Genre_id = ${req.body.Genre_id} WHERE Book_id = ${req.body.Book_id};`

    
    db.query(sqlString, (err, results) => {
        
        if (err){
            throw err;
        }
        else {
            res.status(200).json({
                message: "it worked"
            })
        }
    })

}


module.exports = {
    getAllBooks: getAllBooks,
    searchByAuthorID: searchByAuthorID,
    editBook: editBook
}
