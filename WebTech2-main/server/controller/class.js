const express = require('express');
const Class = require('../schema/Class');
const router = express.Router();

//GET
router.get('/', (req, res, next) => {
    Class.find().then((classes) => {
        res.send(classes);
    })
});

//ADD
router.post('/', (req, res, next) => {
    Class.create(req.body)
        .then((classes) => {
            res.send(classes)
        })
        .catch(next);
});

//DELETE
router.delete('/:id', (req, res, next) => {
    Class.findByIdAndRemove({ _id: req.params.id })
        .then((classes) => {
            res.send(classes);
        });
});


module.exports = router;