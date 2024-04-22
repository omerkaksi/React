import Square from './Square'
import Input from './Input'
import { useState } from 'react';
function App() {
  const [colorValue,setColorValue]=useState('')

  return (
    <div className="App">
     <Square colorValue={colorValue}/>
     <Input 
     colorValue={colorValue}
     setColorValue={setColorValue}/>
     <h1> Helloe</h1>
    </div>
  );
}

export default App;
