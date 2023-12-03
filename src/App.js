import React, {useState} from 'react';
import './App.css';

const App = () => {
 const [result, setresult] = useState("");
 const handleOnClick = (e) => {
    //setresult(event.target);
    setresult(result.concat(e.target.name));
    //console.log(event.target);
 }
 const handleClear = () => {
    setresult("");
 }
 const handleBackspace = () => {
    setresult(result.slice(0, -1));
 }
 const handleCalculate = () => {
    try{
        setresult(eval(result).toString());
    }
    catch(err){
        setresult("Error")
    }
    
 }
  return (
    <div>
        <div className='container'>
            <form>
                <input type = "text" value={result}/>
            </form><br></br>
            <div className='keys'>
            <button className='highlight' onClick={handleClear} id="clear">Clear</button>
            <button className='highlight' onClick={handleBackspace} id="backspace">C</button>
            <button className='highlight1' name="/" onClick={handleOnClick}>&divide;</button>
            <button name="7" onClick={handleOnClick}>7</button>
            <button name="8"  onClick={handleOnClick}>8</button>
            <button name="9" onClick={handleOnClick}>9</button>
            <button className='highlight1' name="*" onClick={handleOnClick}>&times;</button>
            <button name="4" onClick={handleOnClick}>4</button>
            <button name="5" onClick={handleOnClick}>5</button>
            <button name="6" onClick={handleOnClick}>6</button>
            <button className='highlight1' name="-" onClick={handleOnClick}>&ndash;</button>
            <button name="1" onClick={handleOnClick}>1</button>
            <button name="2" onClick={handleOnClick}>2</button>
            <button name="3" onClick={handleOnClick}>3</button>
            <button className='highlight1' name="+" onClick={handleOnClick}>+</button>
            <button name="0" onClick={handleOnClick} id="zerobutton">0</button>
            <button name="." onClick={handleOnClick}>.</button>
            <button className='highlight1' onClick={handleCalculate} >=</button>
        </div>
        </div>
       
    </div>
  )
}

export default App;


