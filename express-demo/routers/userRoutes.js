const express=require('express')
const router=express.Router()
const {createUser,getUser,createUserById,getUserById,deleteUserById}= require('../controllers/userController')
router.route('/').get(getUser).post(createUser)
router.route('/:id').post(createUserById).get(getUserById).delete(deleteUserById)

module.exports=router