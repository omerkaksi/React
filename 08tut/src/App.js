import logo from './logo.svg';
/* import './App.css'; */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
function App() {
  const name="omer";
  
  return (
    <div className="App">
      <Header title="Grocery"/>
      <Content/>
      <Footer/>
     
    </div>
  );
}

export default App;
