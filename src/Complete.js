import React from 'react';



const Complete = ({completes, deleteComplete, clearDone}) =>{
    const testTodo = completes.filter(item=> item.status === true);
    const CompleteList = testTodo.map(complete=>{
                return (    
                        <li class="list-group-item list-group-item-success text-truncate" onClick={() =>deleteComplete(complete.content)}><del>{complete.content}</del></li>
                )
            }
        )

        if(completes.filter(item=> item.status===true).length>0){
            return(
                <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 mt-5">
                    <h4>Completed Tasks<small> (Click to add in ToDo List)</small><button className="btn btn-sm btn-danger pull-right text-right" onClick={()=>clearDone()}>Clear List </button></h4>
                    <ul class="list-group">
                        {CompleteList}
                    </ul>
                </div>
            )
        }else{
            return(
                <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 mt-5">
                    <h4>Completed Tasks<small> (Click to add in ToDo List)</small><button className="btn btn-sm btn-danger pull-right text-right" onClick={()=>clearDone()}>Clear List </button></h4>
                    <p>No Completed Task Yet!</p>
                </div>
            )
        }
}
export default Complete;