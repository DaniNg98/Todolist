import React, {Component} from 'react';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
		tasks: [],
		input: ""
    };
  }

  render() {
    return (
		<div>
			<nav class="navbar navbar-light bg-light">
  				<span class="navbar-brand mb-0 h1">Todolist</span>
			</nav>

			<div id="container">
				<h1 className="header">Ting å gjøre</h1>
						<ul>
							{this.state.tasks.map((task, i) => 
								<li key={i}>
									<button id="deleteButton" className="btn btn-danger" data-index={i} onClick={this.deleteTask}>Slett</button>
									{task}
								</li>
							)}
						</ul>
						<div>
							<input id="inputField" className="form-control" placeholder="Skriv inn en oppgave" onChange={this.handleChange} value={this.state.input} />
							<button id="addButton" className="btn btn-primary btn-lg btn-block" onClick={this.addTask}>Legg til en oppgave</button><br />
						</div>
						Antall ting å gjøre: {this.state.tasks.length}
			</div>
		</div>
    )
  }

  handleChange = (event) => {
	  this.setState({
		  input: event.target.value
	  });
  }

  addTask = () => {
	  this.setState(state => ({
		  tasks: [...state.tasks, state.input],
		  input: ""
	  }));
  }

  deleteTask = (event) => {
	  const index = event.target.dataset.index;
	  this.setState(state => {
		  const tasks = [...state.tasks];
		  tasks.splice(index, 1);
		  return {
			  tasks: tasks
		  };
	  })
  }
}

export default App;
