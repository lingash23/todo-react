import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addTodo({
        id: Date.now(),
        name,
        description,
        status: "Not Completed",
      });
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="container">
      <form
        className="todo-form row align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="form-group col-lg-5 col-md-6 col-sm-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-5 col-md-6 col-sm-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Todo Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group col-lg-2 col-md-12 col-sm-12 mb-3">
          <button type="submit" className="btn btn-add w-100">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
