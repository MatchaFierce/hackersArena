const { Router } = require('express');
const { AuthCtrl } = require('../controllers');

const router = Router();

// User registration
router.post('/register', AuthCtrl.register);


router.get('/register', (req, res) => {
  res.render('register');
});


// User login view
router.get('/login', (req, res) => {
  res.render('login');
});

// User login
router.post('/login', AuthCtrl.login);


module.exports = router;
