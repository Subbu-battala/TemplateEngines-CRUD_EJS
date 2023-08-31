const userRoute = require('express').Router()
const {index, create, edit, pnf} = require('../controller/user_controller')

userRoute.get(`/`, index)
userRoute.get(`/user/add`, create)
userRoute.get(`/user/edit`, edit)

userRoute.all(`/*`, pnf)

module.exports = userRoute 