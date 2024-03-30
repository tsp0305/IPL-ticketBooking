
//importing API from controller
const { bookTicket,addUser } = require('../controllers/user.controller')

//importing validating functions
const { authorize } = require('../middleware/index.middleware');

const userRouter=require('express').Router()

//CRUD operations

userRouter.post('/',authorize,bookTicket);
userRouter.post('/',authorize,adduser);



module.exports={userRouter}
