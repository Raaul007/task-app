import React from 'react';
import Task from './Task';


const TaskList = (props) => {

  const { tasks, deleteAllTasks, deleteTask, editTask } = props

  return (
    <ul className="list-group my-3">
      <h3 className="text-uppercase text-center">lista zadań</h3>
      {
        tasks.map(item => {
          return (
            <Task
              key={item.id}
              taskValue={item.taskValue}
              deleteTask={() => deleteTask(item.id)}
              editTask={() => editTask(item.id)}
            />
          )
        })
      }
      <button
        onClick={deleteAllTasks}
        type="button"
        className="btn btn-danger text-uppercase mt-5">

        wyczyść listę zadań
        </button>
    </ul>
  );
}

export default TaskList;
