import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v1 as uuid } from "uuid";

class App extends Component {
  state = {
    id: uuid(),
    tasks: [],
    taskValue: "",
    editTask: false,
  }

  // obsługa zmiany inputa
  handleInputChange = (e) => {
    this.setState({
      taskValue: e.target.value,
    });
  }

  // obsługa dodawania nowego taska, czyli submit formularza po kliknięciu w button "dodaj zadanie"
  addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      taskValue: this.state.taskValue,
    };

    // kopia tablicy i push nowego obiektu zadania
    const updatedTasks = [...this.state.tasks, newTask];
    if (this.state.taskValue.length > 2) {
      this.setState({
        tasks: updatedTasks,
        taskValue: "",
        id: uuid(),
        editTask: false,
      })
    }
  }

  // wyczyszczenie listy zadań
  deleteAllTasks = () => {
    this.setState({
      tasks: [],
    });
  }

  // wyczyszczenie pojedynczego zadania
  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter(item => item.id !== id);
    this.setState({
      tasks: filteredTasks,
    });
  }

  // edycja pojedynczego zadania
  editTask = (id) => {
    if (!this.state.editTask) {
      const filteredTasks = this.state.tasks.filter(item => item.id !== id);
      const selectedTask = this.state.tasks.find(item => item.id === id);
      this.setState({
        tasks: filteredTasks,
        taskValue: selectedTask.taskValue,
        editTask: true,
        id: id,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 col-mt-4">
            <h1 className="text-uppercase text-center">task app</h1>
            <TaskInput
              taskValue={this.state.taskValue}
              handleInputChange={this.handleInputChange}
              addTask={this.addTask}
              editTask={this.state.editTask}
            />
            <TaskList
              tasks={this.state.tasks}
              deleteAllTasks={this.deleteAllTasks}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;