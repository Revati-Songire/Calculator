import './App.css';
import { useState } from 'react';

function App() {
  
  const [data,setData]= useState('');

  const getValue =(e)=>{
   console.log(e.target.value)
   setData(data.concat (e.target.value))
  }
  
  const calculateValue=()=>{
    setData(eval(data).toString())
  }

  const deleteValue=()=>{
    setData(data.slice(0,-1))
  }

  const clearValue=()=>{
    setData('')
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='container'>
        <div>
          <input type='text' placeholder='0' value={data}/>
        </div>

        <button onClick={clearValue} value="AC">AC</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={deleteValue} value="DEL"><i class="fa-solid fa-delete-left"></i></button>
        <button onClick={getValue} value="/">/</button>

        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*">*</button>

        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="-">-</button>

        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+">+</button>

        <button onClick={getValue} value="00">00</button>
        <button onClick={getValue} value="0">0</button>
        <button onClick={getValue} value=".">.</button>
        <button className="equalto" onClick={calculateValue} value="=">=</button>

      </div>
    </div>
  );
}

export default App;

