var router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/signin', (req, res) => {
    res.render('signIn.ejs');
});

module.exports = router;