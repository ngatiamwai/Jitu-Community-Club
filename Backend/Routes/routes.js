const {Router}=require('express')
const { registerPerson } = require('../Controllers/controller')

const userRouter=Router()


userRouter.post('/register',registerPerson)
// userRouter.post('/login',loginUser)

module.exports={
    userRouter
}