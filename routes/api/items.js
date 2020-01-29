const express = require('express');

const router = express.Router();


// item Model
const Item = require('../../models/item');


// @route GET api/items
// @ desc Get all items
// @acces Public
router.get('/', async (req, res) => {
  console.log('called')
  try {
  const items = await Item.find().sort({ date: 1 });
  console.log('lol')
  }
  catch(e){
    console.log('lol')
    console.log(e)
  }
  console.log(items)
  //.then((items) => res.json(items));
  res.json((items))
  console.log("Getting items nub")
});

// @route POST api/items
// @ desc create a item
// @acces Public
router.post('/', async (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    content: req.body.content,
  });
  console.log("Big d dan")
    // Original: newItem.save().then(item=> res.json(item));
    // Async Await:
  const item = await newItem.save();
  res.json(item);
});

// @route DELETE api/items
// @ desc delete a item
// @acces Public
router.delete('/:id', (req, res) => {
  console.log("cunt")
  Item.findById(req.params.id).then((item) => item.remove().then(() => res.json({ success: true }))).catch((err) => res.status(404).json({ success: false }));
});


module.exports = router;
