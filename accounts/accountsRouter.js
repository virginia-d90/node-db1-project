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
    const {id} = req.params;

    db.select("*")
        .from("accounts")
        .where({ id })
        .first()
        .then(account => {
            res.status(200).json({data: account})

        })
        .catch(err => {
            res.status(500).json({message: 'could not get account with specified ID'})
        })
})

router.post('/', (req, res) => {

})


router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})


module.exports = router
