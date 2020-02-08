const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create Schema
const ItemSchema = new Schema({
	title: {
		type: String,
		require: true,
	},
	content: {
		type: String,
		require: false,
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const CategoriesSchema = new Schema({
  category: {
    categoryTitle: String,
    categoryTodo: [ItemSchema]
  },
},{ strict : false })

module.exports = {
  categoriesCollection: mongoose.model('categories', CategoriesSchema),
  item: mongoose.model('item', ItemSchema)
}