const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('./sado');
const app = express();
const mustacheExpressInstance = mustacheExpress(); 
mustacheExpressInstance.cache = null;
app.engine('mustache', mustacheExpressInstance);
app.set('view engine', 'mustache');
app.set('views', __dirname  + '/views');

var path = require('path');
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: true }));


//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.connect(db, {
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'views')));

path.join(__dirname, '..', 'views')

app.get('/', function(req, res){
    res.render('index');
});

app.get('/booking', function(req, res){
    res.render('booking');
});

app.get('/gallary', function(req, res){
    res.render('gallary');
});

app.get('/pricing', function(req, res){
    res.render('pricing');
});

app.get('/article', function(req, res){
    res.render('article');
});

app.post('/clients0', function(req, res){
    let newTodo = new Todo({ 
        details: req.body.details
    });

    newTodo.save().then(function(result){
        console.log(result);
        res.redirect('/booking');
    });
});

app.post('/clients1', function(req, res){
     let newTodo1 = new Todo({ 
         details: req.body.details1 
        });
      
      newTodo1.save().then(function(result){
        console.log(result);
        res.redirect('/booking');
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));