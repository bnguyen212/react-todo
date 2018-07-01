const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js')

router.get('/all', (req, res) => {
  TodoItem.find()
  .then(responses => {
    res.send(responses)
  })
  .catch(error => {
    res.send(error)
  })
})

router.post('/add', (req, res) => {
  const newTodo = new TodoItem({
    task: req.body.task
  });

  newTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

router.post('/remove', (req, res) => {
  TodoItem.findByIdAndRemove(req.body.id)
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});

router.post('/toggle', (req, res) => {
  TodoItem.findById(req.body.id)
  .then(response => {
    if (response) {
      response.completed = !response.completed
      return response.save()
    } else {
      return new Error('Invalid ID')
    }
  })
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});

module.exports = router;