const Todo = require("../models/todo");

exports.getAllTodo = (req, res) =>{
    Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) =>
        res
        .status(404)
        .json({ message: "Todo could not be found", error: err.message })
        );
};


exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
    .then((data) => res.json({message: "Todo creation successful", data}))
    .catch((err) =>
    res
      .status(400)
      .json({ message: "Todo could not be created", error: err.message })
    );
};

exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({message: "Todo update successful", data}))
    .catch((err) =>
    res
        .status(400)
        .json({ message: "Todo could not be updated", error: err.message })
    );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
    .then((data) => 
        res.json({message: "Todo deletion successful", data})
    )
    .catch((err) =>
        res
        .status(404)
        .json({ message: "Todo could not be deleted", error: err.message })
        );
}
