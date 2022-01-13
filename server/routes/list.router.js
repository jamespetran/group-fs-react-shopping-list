const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) => {
    console.log('In router GET');
    const queryText = `
                        SELECT * FROM "groceries"
                        `;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Error: Could not retrieve list', err);
        res.sendStatus(500);
    });
});// end GET

router.post('/', (req, res) => {
    const item = req.body
    const sqlText = `INSERT INTO groceries(name, quantity, unit)
                      VALUES ($1, $2, $3)`
    
    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log('added item to the database', result);
            res.sendStatus(201);
            
        })
        .catch((error) => {
            console.log(`error making database query ${sqlText}`, error);
            res.sendStatus(500);
            
        })
}); // end POST

module.exports = router;