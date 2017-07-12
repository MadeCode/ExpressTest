const express = require('express'),
	app = express(),
    wine = require('./routes/wines'),
	bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  db.collection('wines').find().toArray((err, result) => {
    if (err) return console.log(err);
    
	// renders index.ejs
    res.render('index.ejs', {wines: result})
  })
})

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');