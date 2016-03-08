var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var dbFunctions = require('./data/blog.js')


var app = express();
app.enable('strict routing');

var routes = require('./routes/index');
var ternary = require('./routes/ternary');
var about = require('./routes/about');
var author = require('./routes/author');
var study = require('./routes/study');
var blog = require('./routes/blog');
var signIn = require('./routes/signIn');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/routes')));
app.use(express.static(path.join(__dirname, '../public/images/', )));

app.use('/', routes);
app.use('/about', about);
app.use('/happines', about);
app.use('/contact', about);
app.use('/ternary', ternary);
app.use('/author', author);
app.use('/study', study);
app.use('/blog', blog);
app.use('/signIn', signIn);


app.get('/about', function(req, res) {
  res.render('about.jade', {title: 'About'});
});

app.get('/happiness', function(req, res) {
  res.render('happiness.jade', {title: 'Happiness'});
});

app.get('/contact', function(req, res) {
  res.render('contact.jade', {title: 'Contact'});
});

app.get('/ternary', function(req, res) {
  res.render('ternary.jade', {title: 'Ternary'});
});

app.get('/author', function(req, res) {
  res.render('author.jade', {title: 'Author'});
});

app.get('/study', function(req, res) {
  res.render('study.jade', {title: 'Study'});
});

app.get('/blog', function(req, res) {
  res.render('blog.jade', {title: 'Blog'});
});

app.get('/addBlog', function(req, res) {
  res.render('addBlog.jade', {title: 'Add to the Blog'});
  res.redirect('/blog')
});

app.get('/signIn', function(req, res) {
  res.render('signIn.jade', {title: 'Sign-in'});
});

// app.post('/signIn', function (req, resp) {
//   console.log('getting to the sign postrs')
//   var userExists = false
//   var db = mongoose.connect('mongodb://localhost:27017/blog');
//   dbFunctions.getUsers(db, function (err, users) {
//     var newEmail = req.body.email;
//     var userArray = Array.from(user) 
//       userArray.forEach(function(user) {
//         if (user.email === newEmail) {
//           userExists = true
//           db.disconnect(function() {
//             console.log('database closed after signing in')
//             resp.render('blog', {"user": user})
//           })
//         }
//       })
//       if (!userExists) {
//         console.log(req.body.email, "user doesn't exist yet")
//           db.disconnect(function() {
//             console.log('database closed')
//             resp.render('signIn')
//         })
//       }
//   })
// })


// checking if email exists in db already
app.post('/signIn', function (req, res) {
  console.log('posting')
  var userExists = false
  var db = mongoose.connect('mongodb://localhost:27017/blog');
  dbFunctions.getUsers(db, function (err, users) {
    var newEmail = req.body.email;
    var userArray = Array.from(users)
      if(user.email === newEmail) {
        console.log('Already exists in db', user)
        res.render('./views/addBlog')
        userExists = true
      }
  })
  // saving new user to database
  if (!userExists) {
    console.log('trying to save user')
    dbFunctions.saveUser(db, req.body, function(err, resp) {
      console.log('SAVED', resp)
      db.disconnect(function() {
        res.render('blog', {"user": req.body})
        console.log('database closed')
      })
    })
  }
})
// once signed in or registered then 
// app.get('/signIn', function (req, res) {
//   var db = mongoose.connect('mongodb://localhost:27017/blog')
//     db.dbFunctions.getUsers(db, function(err, users) {
//       console.log('blog being read', user)
//       res.render('blog', {users: users})
//       db.disconnect(function() {
//         console.log('database closed')
//       })
//     })
// })

// want to post blog data to the db from /blog page
app.post('/addBlog', function (req, res) {
  db.blog.insert(req.body, function (err, doc) {
    if (err) {
      res.send(err);
    } else {
      console.log('sending blog to database')
      res.json(doc)
    }
  }) 
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;




// app.engine('hbs', hbs.express4({
//   defaultLayout: __dirname + '/views/layout'
// }))
// app.set('view engine', 'hbs')

