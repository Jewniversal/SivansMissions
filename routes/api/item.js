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
  // console.log(categoriesObj)

  /*
  const newCategory = new categoryCollection ({
    category: {
      categoryTitle: 'C',
      categoryTodo: newItem
    }
  })
  const category = await newCategory.save(); */




  // })
  //  await categories[1].category.categoryTodo.push(newItem)
  // categoryCollection.insertMany([category.categoryTitle: 'react'])
  // console.log(newCategory)
  // console.log(categories[0])
  //  categories[0].markModified('categoryTodo')
    // await categories[1].save();

  // categories = await categoryCollection.find()
  // console.log(categories[0].category.categoryTodo)
  // newCategory.category.categoryTodo.push(newItem)
  // console.log(newCategory.category.categoryTodo)
  // const category = await newCategory.save();


  // categoryFilter(categories)
  // categories.forEach(category => {
  //   console.log(category)
  // })
})


// @route GET api/items
// @ desc Get all items
// @acces Public
router.get('/',async  (req, res)=>{
  if( req.query.isCategories ) {
    console.log("Entered")
    console.log(categoriesList)
    res.json(categoriesList);
  }
  else{
   res.json(categoriesObj[req.query.collectionName])
  }

  // Item.find().sort({date: 1}).then(items => res.json(items))
  // await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true },  async (err, db) => {
  //   const collection = await db.collection(req.query.collectionName).find()
  //   if (!collection) throw err
  //   console.log('items recieved');
  //   await collection.forEach((collectionItem) => items.push(collectionItem) )
  //   db.close();
  //   res.json(items)
  //   })
});

/**
 * @route POST api/items
 * @desc create a item
 * @access Public
 */
router.post('/', async (req, res) => {
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
  else {

	const newItem = new Item({
		title: req.body.title,
		content: req.body.content,
  });
  console.log(req.body.stateTitle)
  console.log(keys[req.body.stateTitle])
  await categories[keys[req.body.stateTitle]].category.categoryTodo.push(newItem)
  // categoryCollection.insertMany([category.categoryTitle: 'react'])
  // console.log(newCategory)
  // console.log(categories[0])
   categories[keys[req.body.stateTitle]].markModified('categoryTodo')

  await categories[keys[req.body.stateTitle]].save()
  console.log("New item saved")
  // console.log(categories[keys[req.body.stateTitle]].category)
  /*
  console.log('Big d dan');
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
/*
  const newItem = new Item({
		title: 'Lols',
		content: 'lmfao'
  });
  const newCategory = new categoryCollection ({
    categoryTitle: 'C',
    categoryTodo: newItem
  })
  const category = await newCategory.save(); */


  /*   const newItem = new Item({
		title: 'Lols',
		content: 'lmfao'
  });
  const newCategory = new categoryCollection ({
    category: {
      categoryTitle: 'React',
      categoryTodo: newItem
    }
  })
  const category = await newCategory.save(); */


