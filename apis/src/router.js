const { createUserFeedback } = require('./controller')
const router = require('express').Router()



router.post('/feedback', createUserFeedback )

router.get('/', (req, res)=>{
    return res.status(201).send('Welcome to My portfolio')
} )

router.all("/*",(req,res)=>{
    return res.status(400).send({status:false,msg:"your end point is wrong"})
})

module.exports = router