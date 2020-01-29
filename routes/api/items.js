const express = require('express');

const router = express.Router();


// item Model
const Item = require('../../models/item');


// @route GET api/items
// @ desc Get all items
// @acces Public
router.get('/',async  (req, res)=>{
	// Item.find().sort({date: 1}).then(items => res.json(items))
	const items = await Item.find().sort({date: 1});
	res.json(items);
});

/**
 * @route POST api/items
 * @desc create a item
 * @access Public
 */
router.post('/', async (req, res) => {
	const newItem = new Item({
		title: req.body.title,
		content: req.body.content,
	});
	console.log('Big d dan');
	// Original: newItem.save().then(item=> res.json(item));
	// Async Await:
	const item = await newItem.save();
	res.json(item);
});

// @route DELETE api/items
// @ desc delete a item
// @acces Public
router.delete('/:id', async (req, res) => {
	console.log('cunt');
  const item = await Item.findById(req.params.id);
  try{
    await item.remove();
    res.json({ success: true })
  } catch(err) {
    res.status(404).json({ success: false })
  }
});


module.exports = router;
