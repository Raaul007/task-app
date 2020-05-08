import React from 'react';

const TaskInput = (props) => {

  const { taskValue, handleInputChange, addTask, editTask } = props

  return (
    <div className="card card-body my-3">
      <form onSubmit={addTask}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="nowe zadanie... (min. 3 znaki)"
            value={taskValue}
            onChange={handleInputChange}

          />
        </div>
        <button
          type="submit"
          className={editTask ? "btn btn-block btn-success mt-3 text-uppercase" : "btn btn-block btn-primary mt-3 text-uppercase"}>
          {editTask ? "edytuj zadanie" : "dodaj zadanie"}
        </button>
      </form>
    </div>);
}

export default TaskInput;
