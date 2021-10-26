const express = require('express');
const cors = require('cors')
const app = express()

// settings
app.set('port' , process.env.PORT || 4002 )

// middlerWare
app.use(cors())
app.use(express.json())


// routes
app.use('/api', require('./routes/todo.route'))



module.exports = app