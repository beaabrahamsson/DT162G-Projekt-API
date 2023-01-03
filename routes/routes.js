const express = require('express');

const router = express.Router()

const Model = require('../models/model');

module.exports = router;

//Post Method
router.post('/', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        image: req.body.image,
        author: req.body.author,
        published: req.body.published,
        pages: req.body.pages,
        isbn: req.body.isbn,
        language: req.body.language,
        rating: req.body.rating

    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Search Method
router.post("/search", async (req,res) => {
    const allTasks = await Task.find({title : req.body.query})
    if(!allTasks || allTasks.length === 0) res.status(400).send({error : "No task was found"})
    res.status(200).send(allTasks)
})