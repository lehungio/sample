import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// const element = <Welcome name="Sara" />;

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <UserInfo user={props.author} />
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Components and Props
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />

        {/* Comment */}
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} 
        />
      </header>
    </div>
  );
}

export default App;
