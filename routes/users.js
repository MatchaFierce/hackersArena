const { Router } = require('express');
// const { UserCtrl } = require('../controllers');

const router = Router();


router.get('/');
// router.get('/', UserCtrl.get);
router.post('/login');
// router.post('/register', UserCtrl.register);


module.exports = router;
