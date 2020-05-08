import React from 'react';

const Task = (props) => {

    const { taskValue, deleteTask, editTask } = props

    return (
        <li className="list-group-item text-uppercase d-flex justify-content-between my-2">
            <h6>{taskValue}</h6>
            <div className="task-icon">
                <span onClick={editTask} className="mx-2 text-success" style={{ cursor: "pointer" }}>
                    <i className="fas fa-pen"></i>
                </span>
                <span onClick={deleteTask} className="mx-2 text-danger" style={{ cursor: "pointer" }}>
                    <i className="fas fa-trash"></i>
                </span>
            </div>
        </li>
    );
}

export default Task;