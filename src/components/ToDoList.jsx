import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
  const {todos,selectedTab}=props

  const filteredTodoList= selectedTab=='All'?
    todos:
    selectedTab ==="Completed"?
      todos.filter(val=>val.complete):
      todos.filter(val=>!val.complete)
  return (
    <>
        {filteredTodoList.map((todo,todoindex)=>{
          return(
                <ToDoCard key={todoindex}
                {...props}
                todoIndex={todoindex}
                todo={todo}/>
            )
        })}
    </>
  )
}
