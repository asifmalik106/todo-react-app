import React from 'react';


const ToDo = ({todos, deleteToDo}) =>{
    const testTodo = todos.filter(item=> item.status === false);
    const ToDoList = testTodo.map(todo=> {
                return (
                        <li class="list-group-item text-truncate" onClick={() =>deleteToDo(todo.content)}>{todo.content}</li>
                )
            }
        )

        if(todos.filter(item=> item.status===false).length>0){
            return(
                <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12">
                    <h4>Pending Tasks ({todos.filter(item=> item.status!=true).length} out of {todos.length})</h4>
                    <ul class="list-group">
                        {ToDoList}
                    </ul>
                </div>
            )
        }else{
            return(
                <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12">
                    <h4 className="text-center">Nothing to do... yay!</h4>
                </div>
            )
        }
    
}
export default ToDo;