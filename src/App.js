
import './App.scss';
import {BrowserRouter, Routes,Route,Link} from "react-router-dom"
import React, { useEffect, useState } from "react";
import Header from './components/header/header';
import { Form,Button } from 'react-bootstrap';
import TodoForm from './TodoForm';
import Delete from './components/buttons/deleteMenuOptions';
import EditMenu from './components/buttons/editMenuOptions';
import CreateListButton from './components/header/createListButton';
import Ellipses from './components/ellipses/ellipses';
import ListHeader from './components/header/ListHeader';
import HeaderCreate from './components/header/headerCreate';


function App() {
  
    const [todos, setTodos] = useState([]);
  

    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }
  
      const newTodos = [...todos,todo ];
  
      setTodos(newTodos);
     
      console.log(...todos);
     
    }; 
  
    const removeTodo = id => {
      const removedArr = [...todos].filter(todo => todo.id !== id);
  
      setTodos(removedArr);
    };
  
  
   
    function ListHome(props){
    return(
      <div>
        <Header/>
      
      {todos.length==0?(<Link to="/Todolist" className='linkDec'> <CreateListButton/></Link>):<></>}
      <Todo
          todos={todos}

          removeTodo={removeTodo}
          
        />
      </div>
    );
  }



  
  const Todo = ({ todos,  removeTodo, }) => {
  

  return todos.map((todo, index) => (
    <div style={{paddingBottom:"20px"}} key={index}>
      <Link className='linkDec linkEffect' to={"/todoPage"+index}>
        <div className=''>
        <div className='listButton linkEffect'>
          <div className='button-padding  createListButton1'>{todo.text}</div>
          <Ellipses/>
          
          </div>
        </div>
      </Link>
      <Button
            onClick={() => removeTodo(todo.id)}
            className='delete-icon linkEffect'
          ><Delete/></Button>
         <Link className='linkDec'to={'/Edit'+index}> <Button

            className='edit-icon linkEffect'
          ><EditMenu/></Button></Link>
    </div>
  ));
  }
  function Edit(props){

   
    function handleSubmit()
    {
      
     
      setTodos(prev => prev.map((item, index) => (index === props.i ? {
        id: item.id,
        text: item.text,
        check: item.check1,
        check1: item.check,
        
      } : item)))

      
    }
      return todos.map((todo, index) => props.i==index?(
      
        <div
             
             key={index}
           >
             <HeaderCreate i={handleSubmit} />
             <div key={todo.id} >
               {todo.text}
             </div>
            {todo.check1.map(
              ((elem,ii)=>(
                elem.val!=''?(
                 
                  <div className='checkboxStyle'key={ii} ><input  type="checkbox" id={elem.id} value={elem.val} onChange={()=>elem.bool=!elem.bool}  defaultChecked={elem.bool}  
                  /><label>{elem.val}</label></div>
                  )
                  :<div key={ii} />
              )))}
                
        </div>
      ):<div key={index}></div>)
            }

  function TodoPage(props){

    return todos.map((todo, index) => props.i===index?(
      
   <div
        
        key={index}
      >
        <ListHeader />
        <div key={todo.id} >
          {todo.text}
        </div>
        <div className='icons'>
          <Link to="/"><Button
            onClick={() => removeTodo(todo.id)}
            className='delete-icon linkEffect'
          ><Delete/></Button></Link>
          <Link to={'/Edit'+props.i}><Button
            className='edit-icon linkEffect'
          ><EditMenu/></Button></Link>
        </div>
       {todo.check.map(
         (elem,ii)=>(
           elem.val!==''?(
             (elem.bool===true)?(
             <div className="checkboxStyle strike" key={ii}><input type="checkbox" checked={elem.bool} readOnly/><label>{elem.val} very checked</label></div> ):
             <div className='checkboxStyle' key={ii}><input type="checkbox" checked={elem.bool} readOnly/><label>{elem.val}</label></div>
             )
             :<div key={ii}/>))}
             
            

            </div>
    
   ):<div key={index}/>)
  
            }
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ListHome />}/>
        <Route path="/Todolist" element={<TodoForm onSubmit={addTodo}  />}/>
        {todos.map((todo, index) => (<Route path={"/TodoPage"+index} key={index} element={<TodoPage i={index}/>}/>))}
        {todos.map((todo, index) => (<Route path={"/Edit"+index} key={index} element={<Edit i={index}/>}/>))}
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;

