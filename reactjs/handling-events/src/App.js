import React from 'react';
import './App.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    console.log('this is:', this);
  };
  
  render() {
    return (
      <>
      <button onClick={this.handleClick}>
        Click me
      </button>
      <button onClick={() => this.handleClick()}>
          Click me
      </button></>
    );
  }
}

function App() {
  return (
    <div>
      <Toggle />
      <LoggingButton />
    </div>
  );
}

export default App;
