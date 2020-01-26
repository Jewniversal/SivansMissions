const express = require('express');
const router = express.Router();


//item Model
const Item=require('../../models/item')


// @route GET api/items
// @ desc Get all items
// @acces Public
router.get('/', (req, res)=>{
    Item.find().sort({date: 1}).then(items => res.json(items))
})

// @route POST api/items
// @ desc create a item
// @acces Public
router.post('/', (req, res)=>{
    const newItem = new Item({
        title: req.body.title,
        content: req.body.content
    });
    newItem.save().then(item=> res.json(item));
})

// @route DELETE api/items
// @ desc delete a item
// @acces Public
router.delete('/:id', (req, res)=>{
    Item.findById(req.params.id).then(item=> item.remove().then(()=> res.json({success:true}))
    ).catch(err => res.status(404).json({success:false}))
})



module.exports = router;