var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-message-Board', messages: messages });
});

// GET form page

router.get('/new', (req, res, next) => {
  res.render('form');
})

// Post the details and redirect to home page /

router.post('/new',(req, res, next) => {
  const message = req.body.messagetext;
  const user = req.body.user;
  messages.push({text: message, user: user, added: new Date()});
  res.redirect('/');
})

module.exports = router;
