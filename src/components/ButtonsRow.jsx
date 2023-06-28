import React, { useContext, useState } from 'react'
import ColorContext from './../providers/ColorContext';



const ButtonsRow = ({options, correct}) => {

    const {currentAnswer, setCurrentAnswer,random_hex_color_code, setOptions} = useContext(ColorContext);
    const [result, setResult] = useState('');
    function checkAnswer(option){
        if(option === correct){
           setResult('Correct');
            setCurrentAnswer(random_hex_color_code());
            setOptions([random_hex_color_code(),random_hex_color_code()])
        }
        else{
        setResult('incorrect');

           
    }
    }
  return (
    <div>
      <div className="buttons">
        {
            options.map((color, index)=>{
                return <button key={index} onClick={()=>checkAnswer(color)}>{color}</button>
            })
        }


      </div>
      <p>{result}</p>
    </div>
  )
}

export default ButtonsRow
