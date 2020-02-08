const express = require('express');
const mongoose = require('mongoose')

const router = express.Router();


// item Model
const categoryCollection = require('../../models/item')
                              .categoriesCollection
const Item = require('../../models/item').item

//get mongo url
const db = require('/home/raymond/Projects/SivansMissions/config/keys').mongoURI

let categories;

let categoriesObj = {}
let keys = {}
let categoriesList=[];

const categoryFilter = async (categoriesArray) => {
  let counter =0;
  categoriesObj = {}
  keys = {}
  categoriesList=[]
  categoriesArray.forEach(item => {
    categoriesObj[item.category.categoryTitle] = item.category.categoryTodo
    keys[item.category.categoryTitle] = counter
    categoriesList.push(item.category.categoryTitle)
    counter++;
  })
}

const getItems = async () => {
  categories = await categoryCollection.find()
  await categoryFilter(categories)
  console.log("Getting Items")
}


mongoose.connection.once('open', async () => {
  setInterval(getItems,1000);
})


// @route GET api/items
// @ desc Get all items
// @acces Public
router.get('/',async  (req, res)=>{
  // get all categories
  if( req.query.isCategories ) {
    res.json(categoriesList);
  }
  // Get all todos by collection name from categories object
  else{
   res.json(categoriesObj[req.query.collectionName])
  }

  // OLD
/*   Item.find().sort({date: 1}).then(items => res.json(items))
  await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },  async (err, db) => {
    const collection = await db.collection(req.query.collectionName).find()
    if (!collection) throw err
    console.log('items recieved');
    await collection.forEach((collectionItem) => items.push(collectionItem) )
    db.close();
    res.json(items)
    }) */
});

/**
 * @route POST api/items
 * @desc create a item
 * @access Public
 */
router.post('/', async (req, res) => {
  //Check if creating a new category and post a new one
  if(req.body.category) {
    console.log("Creating new category")
    const newCategory = new categoryCollection ({
      category: {
        categoryTitle: req.body.category,
        categoryTodo: []
      }
    })
    await newCategory.save();
    console.log('new category created')
  }
  // Other option will be to create a new Item in an existing category
  else {
	const newItem = new Item({
		title: req.body.title,
		content: req.body.content,
  });
  console.log(req.body.stateTitle)
  console.log(keys[req.body.stateTitle])
  await categories[keys[req.body.stateTitle]].category.categoryTodo.push(newItem)

  // Save new category to mongo DB
  categories[keys[req.body.stateTitle]].markModified('categoryTodo')
  await categories[keys[req.body.stateTitle]].save()
  console.log("New item saved")

  //   OLD
  /*
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    db.collection(req.body.stateTitle).insertOne(newItem, () => {
      if (err) throw err
      console.log('item inserted');
      db.close();
    })
  }
    ).catch((err) => console.log(`Error atl ${err}`));
    */
	// Original: newItem.save().then(item=> res.json(item));
	// Async Await:
	// const item = await newItem.save();
  // res.json(item);
}
});

// @route DELETE api/items
// @ desc delete a item
// @acces Public
router.delete('/',  (req, res) => {
  // TODO:: UPDATE DELETE!!!
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    console.log(db)
    let id = mongoose.Types.ObjectId(req.query.todoId)
    db.collection(req.query.collectionName).deleteOne({"_id":id}, () => {
      if (err) throw err
      console.log('Todo deleted');
      db.close();
    })
  }).catch((err) => console.log(`Error at ${err}`));
});


module.exports = router;



