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

module.exports = router;