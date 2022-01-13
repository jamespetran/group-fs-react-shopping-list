const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
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
})

module.exports = router;