const router = require('express').Router();

router.get('/home', (req, res)=>{
    res.render('home', {title:"Kenneth Tan"});
});

module.exports = router;