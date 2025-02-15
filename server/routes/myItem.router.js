const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM myList ORDER BY name, quantity, unit, purchased ;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got items back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})
router.post('/', (req, res) => {
    const myItem = req.body;
    const sqlText = `INSERT INTO myItem (name, quantity, units, purchased)
                     VALUES ($1, $2, $3, $4)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [myItem.name, myItem.quantity, myItem.units, myItem.purchased])
        .then((result) => {
            console.log(`Added item to the database`, myItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    const sqlText = `DELETE FROM "myList" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});

router.put('/toggle/:id', (req, res) => {
    let { id } = req.params;
    // This query will switch from true to false and false to true
    const sqlText = `
        UPDATE "myList" SET "Name " = NOT "name" 
        WHERE "id" = $1;
    `;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
});

// router.put('/sighting/:id', (req, res) => {
//     let { id } = req.params;
//     // This query will switch from true to false and false to true
//     const sqlText = `
//         UPDATE "Items" SET "completed" WHERE "id" = $1;
//     `;
//     pool.query(sqlText, [id])
//         .then((result) => {
//             console.log(`Got stuff back from the database`, result);
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${sqlText}`, error);
//             res.sendStatus(500); // Good server always responds
//         })
// });

module.exports = router;
