import './App.css';

const name = 'World';
const helloWorld = <h1>Hello, {name}</h1>; // element

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Hung',
//   lastName: 'Le'
// };

// const element = (
//   <h2>
//     Hello, {formatName(user)}!
//   </h2>
// );

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

function localTime() {
  const element = (
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  );

  return element;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {helloWorld}
        {localTime()}
      </header>
    </div>
  );
}

export default App;
