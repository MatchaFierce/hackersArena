const { Router } = require('express');
const { ProblemCtrl } = require('../controllers');

const router = Router();


router.get('/', (req, res) => {
  res.render('problems');
});
// router.get('/', );
// router.post('/login', UserCtrl.login);
// router.post('/register', UserCtrl.register);


module.exports = router;
