const express = require("express")

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get('/', (req, res) => {
    db.select("*")
        .from("accounts")
        .then(accounts => {
            res.status(200).json({data: accounts})
        })
        .catch(err => {
            res.status(500).json({message: 'could not get accounts'})
        })
})

router.get('/:id', (req, res) => {
    
})

router.post('/', (req, res) => {

})


router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})


module.exports = router
