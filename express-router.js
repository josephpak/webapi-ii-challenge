const express = require('express')

const db = require('./data/db')

const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const post = await db.insert(req.body);
            res.status(201).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: "There was an error while saving the post to the database"
            });
        }
    });

    router.get('/', async (req,res) => {
        try {
            const posts = await db.find();
            res.status(200).json(posts)
        } catch (err) {
            res.status(500).json({
                error: "The posts information could not be retrieved."
            })
        }
    })


module.exports = router;