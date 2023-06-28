import './App.css';
import { useContext, useState } from 'react';
import Colorbox from './components/Colorbox';
import ButtonsRow from './components/ButtonsRow';
import ColorContext from './providers/ColorContext';



const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) { 
 
      // Generate random number 
      var j = Math.floor(Math.random() * (i + 1));
                 
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
     
  return array;
}

function App() {
  const [currentAnswer, setCurrentAnswer] = useState(random_hex_color_code());
  const [options, setOptions] = useState([random_hex_color_code(), random_hex_color_code()]);

  
  return (
    <div className="App">
      <Colorbox color={currentAnswer}></Colorbox>
      <ColorContext.Provider value={{currentAnswer,setCurrentAnswer,options, setOptions, random_hex_color_code}}>
      <ButtonsRow options={shuffleArray([...options, currentAnswer])} correct={currentAnswer}></ButtonsRow>
      </ColorContext.Provider>
      
    </div>
  );
}

export default App;
