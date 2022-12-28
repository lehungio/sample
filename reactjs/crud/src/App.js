import './App.css';
import Home from './components/create';
import About from './components/create';
import Contact from './components/create';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    // <Router>
    //   <div className="main">
    //     <h2 className="main-header">React Crud Operations</h2>
    //     <Routes>
    //       <div><Route exact path='/create' component={Create} /></div>
    //       <div style={{ marginTop: 20 }}>
    //         <Route exact path='/read' component={Read} />
    //       </div>
    //       <Route path='/update' component={Update} />
    //     </Routes>
    //   </div>
    // </Router>

    <div className="App">
      <Router>
        <h2>React Router Sample</h2>
        <p>Click on the link for routing.</p>
        <Link to='/'>Home </Link>
        {/* <Link to='/about'>About </Link> */}
        {/* <Link to='/contact'>Contact </Link> */}
        <hr />
        <Routes>
          <Route path='/'><Home /></Route>
          {/* <Route path='/about'><About /></Route> */}
          {/* <Route path='/contact'><Contact /></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;