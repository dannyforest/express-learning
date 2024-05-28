var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        message: 'Hello World!'
    })
});

/* GET a specific user */
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    const queryParams = req.query;

    res.json({
        message: `Hello ${id}!`,
        queryParams: queryParams
    })
});

module.exports = router;
