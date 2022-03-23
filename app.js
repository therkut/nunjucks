var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

//nunjucks
var PATH_TO_TEMPLATES = '.' ;
nunjucks.configure( PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
} ) ;

app.set('view engine', 'html')
const PORT = '8000'
app.get('/', (req, res) => {
  res.render('home.html')
})
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})