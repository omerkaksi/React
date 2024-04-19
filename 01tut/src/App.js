import logo from './logo.svg';
/* import './App.css'; */
import { useState} from 'react'
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';

function App() {
  const name="omer";
  const [newItem, setNewItem]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    console.log(newItem)
    // addItem
    setNewItem('');

  }
  return (
    <div className="App">
      <Header title="Grocery"/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content/>
      <Footer/>
     
    </div>
  );
}

export default App;
