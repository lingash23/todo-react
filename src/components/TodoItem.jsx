import React, { useState } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleStatusChange = (e) => {
    updateTodo({
      ...todo,
      status: e.target.value,
    });
  };

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      name: newName,
      description: newDescription,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewName(todo.name);
    setNewDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card todo-card">
        <div className="card-body">
          {isEditing ? (
            <>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>
              <button className="btn btn-success mr-2" onClick={handleUpdate}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="card-title">Name: {todo.name}</p>
              <p className="card-text">Description: {todo.description}</p>
              <p className="card-text">Status: {todo.status}</p>
              <select
                className={`form-control mt-3 ${
                  todo.status === "Not Completed"
                    ? "not-completed"
                    : "completed"
                }`}
                value={todo.status}
                onChange={handleStatusChange}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
              <button
                className="btn btn-add mt-3 mr-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger mt-3"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
