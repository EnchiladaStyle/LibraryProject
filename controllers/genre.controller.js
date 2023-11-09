const mysql = require('mysql');


function addGenre(req, res){
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

    let sqlString = `INSERT INTO Genre (Genre_name) VALUES('${String(req.body.Genre_name)}');`

    
    db.query(sqlString);

    res.status(200).json({
        message: 'it worked'
    });
}


function deleteGenre(req, res){

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

    let sqlString = `DELETE FROM Genre WHERE Genre_id = ${req.body.Genre_id}`

    
    db.query(sqlString);

    res.status(200).json({
        message: 'it worked'
    });

}

module.exports = {
    addGenre: addGenre,
    deleteGenre: deleteGenre
}
