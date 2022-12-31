import React from 'react';
import './App.css';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
