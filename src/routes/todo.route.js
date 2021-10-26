const Router = require('express')
const router = Router()


const {getList, createItem, getOne, uppdate, deletetodo } = require('../controllers/todo.controllers')

router.route('/todo')
.get(getList)
.post(createItem)

router.route('/todo/:id')
.get(getOne)
.put(uppdate)
.delete(deletetodo)

module.exports = router