import {useState}from 'react'
function App() {
  const [cal,setCal]=useState("")
  const[result,setResult]=useState("")
  const ops=['/','*','+','-','.']
  const updateCalc=value=>{
    if(
      ops.includes(value)&&cal ==''||
      ops.includes(value)&&ops.includes(cal.slice(-1))
    ){return;}
      setCal(cal+value)
    if(!ops.includes(value)){
      setResult(eval(cal+value).toString())
    }
  }
  const calculate=()=>{
    setCal(eval(cal).toString())
  }
  const deleteLast =()=>{
    if(cal==''){
      return;
    }
    const value=cal.slice(0,-1);
    setCal(value)
  }
  const cancel =()=>{
    setCal("")
    setResult("")
  }
  const createDigits =()=>{
  const digits=[];
  for (let i = 1; i < 10; i++) {
    digits.push(
      <button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>
    )
  }
  return  digits;
}
  return (
    <div className="App">
      <div className='cal'>
        <div className='display'>
          {result ? <span>({result})</span>:''}
          &nbsp;
          {cal || "0"}
        </div>
        <div className='operators'>
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={deleteLast} >DEL</button>
        </div>
        <div className='digits'>
          {createDigits()}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
        <div className='cancel'>
            <button onClick={cancel}>AC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
