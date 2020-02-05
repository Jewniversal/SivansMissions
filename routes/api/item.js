const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();


// item Model
const Item = require('../../models/item');

//get mongo url
const db = require('/home/raymond/Projects/SivansMissions/config/keys').mongoURI

// @route GET api/items
// @ desc Get all items
// @acces Public
router.get('/',async  (req, res)=>{
  let items = []
  // Item.find().sort({date: 1}).then(items => res.json(items))
  await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },  async (err, db) => {
    console.log('mongo db')
     console.log(req.query)
    const collection = await db.collection(req.query.collectionName).find()
    if(!items) throw err
    console.log('items recieved');
    await collection.forEach((collectionItem) => items.push(collectionItem) )
    db.close();
    res.json(items)
    })



	// const items = await Item.find().sort({date: 1});
	// res.json(items)
});

/**
 * @route POST api/items
 * @desc create a item
 * @access Public
 */
router.post('/', async (req, res) => {
  console.log(req.body)
	const newItem = new Item({
		title: req.body.title,
		content: req.body.content,
	});
  console.log('Big d dan');
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    console.log('mongo db')
    db.collection(req.body.stateTitle).insertOne(newItem, () => {
      if (err) throw err
      console.log('item inserted');
      db.close();
    })
  }
    ).catch((err) => console.log(`Error atl ${err}`));
	// Original: newItem.save().then(item=> res.json(item));
	// Async Await:
	// const item = await newItem.save();
	// res.json(item);
});

// @route DELETE api/items
// @ desc delete a item
// @acces Public
router.delete('/',  (req, res) => {
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    console.log(db)
    let id = mongoose.Types.ObjectId(req.query.todoId)
    db.collection(req.query.collectionName).deleteOne({"_id":id}, () => {
      if (err) throw err
      console.log('Todo deleted');
      db.close();
    })
  }).catch((err) => console.log(`Error at ${err}`));
  // const item = await Item.findById(req.params.id);
  // try{
  //   await item.remove();
  //   res.json({ success: true })
  // } catch(err) {
  //   res.status(404).json({ success: false })
  // }
});


module.exports = router;
