
//importing API from controller
const { getuserList,addUser,postNoTicket } = require('../controllers/admin.controller')

//importing validating functions
const { authorize } = require('../middleware/index.middleware');

const adminRouter=require('express').Router()

//CRUD operations
adminRouter.get('/',authorize,getuserList)
adminRouter.post('/',authorize,addUser);
adminRouter.post('/',authorize,postNoTicket);


module.exports={adminRouter}
