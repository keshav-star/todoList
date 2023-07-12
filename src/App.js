import './App.css';
import { useState, useEffect } from 'react';
import { _Navbar } from './_Navbar';
import { AddToDo } from './AddToDo'
import { _Todos } from './_Todos';
import { Footer } from './Footer';
import { About } from './About';

import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    let Sno;
    if (todos.length === 0) {
      Sno = 1;
    }
    else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const myTodo = {
      Sno: Sno,
      title: title,
      Desc: desc
    }
    setTodos([...todos, myTodo])

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <>
      <HashRouter>
        <_Navbar title="TodosList" />
        <Routes>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddToDo addTodo={addTodo} />
                <_Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }} >

          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
        </Routes>


        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
