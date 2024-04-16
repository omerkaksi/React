import logo from './logo.svg';
import './App.css';

function App() {
  const name="omer";
  const handleNameChange = () =>{
    const names = ['bob','ali','Hasan'];
    const int =Math.floor(Math.random() *3 );
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>
        Hello {name} {handleNameChange()}!!
       </p>
        <p>
          Edit <code>src/App.js</code> and save to see changes..
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name}[abc]</p>
      </header>
     
    </div>
  );
}

export default App;
