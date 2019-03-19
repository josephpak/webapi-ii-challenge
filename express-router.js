const express = require('express')

const db = require('./data/db')

const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            if (!req.body.hasOwnProperty('title') || !req.body.hasOwnProperty('contents')){
                res.status(400).json ({ 
                    errorMessage: "Please provide title and contents for the post." 
                })
            } else {
                const post = await db.insert(req.body);
                res.status(201).json(post);
            }    
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
    });

    router.get('/:id', async (req,res) => {
        try {
            const post = await db.findById(req.params.id)
            if (post) {
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." 
                })
            }     
        } catch (err) {
            res.status(500).json({ 
                error: "The post information could not be retrieved." 
            })
        }
    })


module.exports = router;