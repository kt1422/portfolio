const router = require('express').Router();

router.get('/home', (req, res)=>{
    res.render('home', {title:"Home"});
});

module.exports = router;