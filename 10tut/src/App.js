import Square from './Square'
import Input from './Input'
import { useState } from 'react';
function App() {
  const [colorValue,setColorValue]=useState('')
  const [hexValue, setHexValue]=useState('')
  const [isDarkText, setIsDarkText]=useState(true)
  return (
    <div className="App">
     <Square colorValue={colorValue}
     isDarkText={isDarkText}
     />
     <Input 
     colorValue={colorValue}
     hexValue={hexValue}
     setColorValue={setColorValue}
     setHexValue={setHexValue}
     isDarkText={isDarkText}
     setIsDarkText={setIsDarkText}
     />
     <h1> Helloe</h1>
    </div>
  );
}

export default App;
