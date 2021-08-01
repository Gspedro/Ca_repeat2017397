
const express = require ('express')
const author = require('../models/author')
const router = express.Router()
const Position = require (require('../models/author'))
// All authors route

router.get('/',(req , res) => {
    res.render('authors/index')
})
// new author route
router.get('/new',(req,res)=> {
res.render('authors/new',{author: new Author()})

})
//creat author 
router.post('/', (req, res) =>{
    res.render('Create')
})
module.exports = router