const express = require('express'),
    router = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    Todo = require('./models')

router.use(cors('*'))
router.use(bodyParser.json())

router.get('/todos', (req, res) => {
    Todo.find()
        .then(todos => {
            res.send(todos)
        })
        .catch(e => res.send(e))
})

router.post('/add', (req, res) => {
    Todo.create(req.body)
        .then(() => {
            res.send(req.body)
        })
        .catch((e) => {
            res.send(e)
        })

})

router.put('/update/:id', (req, res) => {
    const id = req.params.id
    Todo.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.send(req.body)
        })
        .catch(e => res.send(e))
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    Todo.findByIdAndRemove(id)
        .then(() => {
            res.send('deleted')
        })
        .catch(e => res.send(e))
})

module.exports = router