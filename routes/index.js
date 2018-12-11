const { Router } = require('express');
const { UserCtrl } = require('../controllers');
// const path = require('path');

const router = Router();


/* Router initialization */
const authRouter = require('./auth');
// const categoriesRouter = require('./categories');
// const contestsRouter = require('./contests');
// const countriesRouter = require('./countries');
// const languagesRouter = require('./languages');
const problemsRouter = require('./problems');
// const solutionsRouter = require('./solutions');
// const universitiesRouter = require('./universities');
const usersRouter = require('./users');
// const verdictsRouter = require('./verdicts');
// const authRouter = require('./auth');
// const mailer = require('../mail');
// const rolesRouter = require('./roles');
// const allowsRouter = require('./allows');
// const userRolesRouter = require('./userroles');
// const roleAllowsRouter = require('./roleallows');
// const driveRouter = require('./drive');
// const judgeRouter = require('./judge');

router.get('/', (req, res) => {
  // res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  res.render('index');
});

router.get('/leaderboards', (req, res) => {
  res.render('leaderboards');
});

/* Router association */
router.use('/', authRouter);
// router.use('/categories', categoriesRouter);
// router.use('/contests', contestsRouter);
// router.use('/countries', countriesRouter);
// router.use('/languages', languagesRouter);
router.use('/problems', problemsRouter);
// router.use('/solutions', solutionsRouter);
router.use('/users', usersRouter);
// router.use('/universities', universitiesRouter);
// router.use('/verdicts', verdictsRouter);
// router.use('/roles', rolesRouter);
// router.use('/allows', allowsRouter);
// router.use('/userroles', userRolesRouter);
// router.use('/roleallows', roleAllowsRouter);
// router.use('/judge', judgeRouter);
// router.use('/drive', driveRouter);


module.exports = router;
