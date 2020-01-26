import React, { Component } from 'react';
import './App.css';
import TableContainer from './Container/TableContainer'
import  tableStyle from './Style/Table-Style'
import titleStyle from './Style/Title-Style'
import appStyle from './Style/AppBackground'

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}  >
        <div style={tableStyle} >
        <h1 style={titleStyle} >React Project</h1>
        	<TableContainer />
        </div>
        	
      </div>
    )
  }
}

export default App;

