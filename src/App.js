import React, { Component } from 'react';
import CustomDiagram from './CustomDiagram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <main className="main">
          <CustomDiagram />
        </main>
      </div>
    );
  }
}

export default App;
