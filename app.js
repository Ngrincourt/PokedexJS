let express = require('express');
let mongoose = require('mongoose');
let nunjuncks = require('nunjucks');
let bodyParser = require('body-parser');
let multer = require('multer');

var upload = multer({
    dest:__dirname + '/uploads'
});

// On se connecte à la db pokedex qui tourne sur localhost
mongoose.connect('mongodb://localhost/pokedex', {useNewUrlParser: true});

require('./models/Pokemon');
require('./models/Type');

// Instancie une nouvelle application express
let app = express();

app.use(bodyParser.urlencoded({extend: true}));
app.use(upload.single(['file']));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/', require('./routes/pokemon'));
app.use('/', require('./routes/type'));

app.use('/uploads', express.static(__dirname + '/uploads'));

nunjuncks.configure('views', {
    autoescape: true,
    express: app
})

console.log('Pokédex lancé sur le port 3000');

app.listen(3000);

