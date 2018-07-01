const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js')

router.get('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: "test task"
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
    
});

module.exports = router;