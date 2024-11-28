import { useState } from "react"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"


export default function App() {
    //  const todos = [
    // { input: 'Hello! Add your first todo!', complete: true },
    // { input: 'Get the groceries!', complete: false },
    // { input: 'Learn how to web design', complete: false },
    // { input: 'Say hi to gran gran', complete: true },
    // ]

  const [todos,settodos]=useState([{ input: 'Hello! Add your first todo!', complete: true }])

  const [selectedTab,setSelectedTab]=useState("Open")


  function handleAddTodo(newTodo){
    const newTodoList=[{input:newTodo, complete:false},...todos]
    settodos(newTodoList)
  }

  function handleEditTodo(index){
    let newTodoList=[...todos]
    let completedTodo=todos[index]
    completedTodo['complete']=true
    newTodoList[index]=completedTodo
    settodos(newTodoList)
  }

  function handleDeleteTodo(index){
    let newTodoList=todos.filter((todo,todoindex)=>{return todoindex!==index})
    settodos(newTodoList)
  }

  
  return (
    <>
      <Header    todos={todos}/>
      <Tabs      selectedTab={selectedTab} setSelectedTab={setSelectedTab}  todos={todos}/>
      <ToDoInput handleAddTodo={handleAddTodo} />
      <ToDoList   selectedTab={selectedTab} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}todos={todos}/>
      
    </>
  )
}

