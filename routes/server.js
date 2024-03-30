const { adminRouter } = require('./admin.routes')
const { userRouter } = require('./user.route')
const router=require('express').Router()

router.use('/admin',adminRouter)
router.use('/user',userRouter)
module.exports={router}
