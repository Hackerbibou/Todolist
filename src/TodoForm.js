import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import HeaderCreate from './components/header/headerCreate';

import './App.scss'



function TodoForm(props) {
  let oo=1
  const [input, setInput] = useState("");
  const [inputChecks, setInputChecks] = useState([]);
  function Checklist(props) {
    return (
  
             
              <div className={"showing"}>
              <div className='checkboxdiv'/>
              <input
                id={props.id}
               placeholder='checklist'
               value={props.inputvalue}
               onChange={props.submit}
               className='check-input'
             />
  
              
          </div>
  
    )
  }
  const handleCheck = (e) => {
    setInputChecks(...inputChecks.map(elem=>elem==e.target.id?e.target.value:elem));
    document.getElementsByClassName("todo-form").append(<Checklist id={oo} inputvalue={inputChecks[oo]} submit={handleCheck}/>)
    oo++
  };
  const handleChange = (e) => {
    setInput(e.target.value,);
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      check: inputChecks
    });
    
    setInput("")
    setInputChecks([])
    
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>

     <HeaderCreate i={handleSubmit}/>
     

        <div className='TextFieldDiv'>
          
          <input
            placeholder='List title'
            value={input}
            onChange={handleChange}
            name='text'
            className='text-input'
        
          />
         
          <div className="showing" >
          <div className='checkboxdiv'/>
          <input
            id={0}
             placeholder='checklist'
             value={inputChecks.id}
             onChange={handleCheck}
             className='check-input'
           />
           </div>
         
           
           
      

        
        </div>
   
    </form>
  );
}

export default TodoForm;
