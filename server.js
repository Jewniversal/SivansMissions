/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/item');

const app = express();

// Body parser Middleware

app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongoDB

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('MongoDB connected')
}).catch(err => {
  if(err) throw err
})

//
app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('./client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Server started on port ${port}`));
