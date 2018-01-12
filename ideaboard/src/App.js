import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import IdeasContainer from './components/IdeasContainer.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import AppBar from 'material-ui/AppBar';

class App extends Component {
  addNewIdea = () => {
    axios.post(
      'http://localhost:8000/api/v1/ideas',
      { idea:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Ideaboard"></AppBar>
          <IdeasContainer className="IdeasContainer" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
