const express = require('express')
const cors = require('cors')
const db = require('./database')
const seed = require('./seed')
const {addTask, getTasks, deleteTask}  =require('./controllers/tasks')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/seed', seed)
app.post('/api/addTask', addTask)
app.get('/api/getTasks', getTasks)
app.delete('/api/deleteTask/:id', deleteTask)

db.sync()

app.listen(4000, () => console.log('Running on 4000 🤠'))