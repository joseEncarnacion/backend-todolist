const todoCont = {}

const TODOS = require('../models/todo.model')

todoCont.getList = async(req, res) => {
    const items = await TODOS.find()
    res.send(items)
}


todoCont.createItem = async(req, res) => {
    const {title, description, author, date} =  req.body

    const shema = new TODOS({
        title,
        description,
        date,
        author
    })

    await shema.save()
    res.json({message: 'item created'})
}


todoCont.getOne = async(req, res) => {
    const item = await TODOS.findById(req.params.id)
    res.send(item)
}


todoCont.uppdate = async(req, res) => {
    const {title, description, author, date} = req.body    
    await TODOS.findByIdAndUpdate(req.params.id, {
        title,
        description,
        author,
        date
    })

    res.json({message: 'item uppdated'})
}


todoCont.deletetodo = async(req, res) => {
    await TODOS.findByIdAndDelete(req.params.id)
    res.json({message: 'item Deleted'})
}

module.exports = todoCont