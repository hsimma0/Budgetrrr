const express = require('express');
const app = express();
const port = 3008;
const budget = require('./models/budget');
const bodyParser = require('body-parser'); // It is responsible for parsing the incoming request bodies in a middleware before you can handle it.

//MIDDLEWARE (software that acts as a bridge between an OS or DB and APP, especially on a network.)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

//INDEX (This is getting information from Index.ejs)
app.get('/budgets', (req,res) => {
  res.render('index.ejs', {budgetAll:budget})
})

//NEW (This is getting information from New.ejs)
app.get('/budgets/new', (req, res) =>{
    res.render("new.ejs")
})

//CREATE (POST)
app.post('/budget/', (req, res)=>{
  budget.push(req.body);
  console.log(budget);
  res.redirect('/budgets');
})

//SHOW (This is projecting Index.ejs on Show.ejs)
app.get('/budgets/:index', (req,res) => {
  res.render('show.ejs', {budgetAll:budget[req.params.index]});
})

//PORT (This is my port that I am working on)
app.listen(port, () => {
  console.log('I am listening to you, I am at 3000 with Andre')
})

