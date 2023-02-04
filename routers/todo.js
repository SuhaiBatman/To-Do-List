const express = require('express');
const router = express.Router();


const {
    getAllTodos,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../contollers/todo");

/**
 * @route GET api/todo
 * @description Get all todo
 * @access public
 */
router.get("/", getAllTodos);


/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/",postCreateTodo);

/**
 * @route PUT api/todo/:id
 * @descrption update todo
 * @access public
 */
router.put("/:id", putUpdateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id",deleteTodo);

module.exports = router;