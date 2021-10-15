import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {header, footer} from './Common'
import ToDo from './ToDo';
import Complete from './Complete';

class App extends React.Component{
  state = {
    todoList: [
      {id: 1, content: 'Buy Medicines', status: true},
      {id: 2, content: 'Order Furnitures', status: false},
      {id: 2, content: 'Make Dinner For Party', status: false},
    ],
    newItem: ""
  }
  

  storeNewData= (e) =>{
    this.setState({
      newItem: e.target.value
    })
  }

  updateToDoList= () =>{
    if(this.state.todoList.filter(item=> item.content===this.state.newItem).length>0){
      alert("This is already in list!");
    }else if(this.state.newItem!==""){
      this.setState({
            todoList: [...this.state.todoList, {id: this.state.todoList.length+1, content: this.state.newItem, status: false}],
            newItem: ""
          },()=>localStorage.setItem("localToDoData", JSON.stringify(this.state)),{
            todoList: this.state.todoList.reverse(),
            
          })
    }
    
  }

  toggleToDo = (content) =>{
    const updatedToDo = this.state.todoList.map(item => item.content === content? { ...item, status: !item.status } : item);
    console.log(updatedToDo);
    this.setState({
      todoList: updatedToDo
    },()=>localStorage.setItem("localToDoData", JSON.stringify(this.state)))
  }

  clearList = () =>{
    console.log("Clear List");
    const newList = this.state.todoList.filter(item=> item.status!==true);
    this.setState({
      todoList: newList
    },()=>localStorage.setItem("localToDoData", JSON.stringify(this.state)))
  }
  
  componentDidMount = () => {
    console.log()
    let data = localStorage.getItem("localToDoData");
      if(data!=null){
      this.setState( 
          JSON.parse(data)
        )
      }
      this.setState({
        newItem: ""
      })
    }

  render() {
    return (
      <div className="App">
        {header}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 mt-5 input-group">
                  <input className="form-control" placeholder="What's pending today?" value={this.state.newItem} onChange={this.storeNewData}/>
                  <div class="input-group-append">
                    <button onClick={this.updateToDoList} class="btn btn-primary mb-2">Add ToDo</button>
                  </div>
                </div>
              </div>
            </div>
            <ToDo todos={this.state.todoList} deleteToDo={this.toggleToDo}/>
            <Complete completes={this.state.todoList} deleteComplete={this.toggleToDo} clearDone={this.clearList}/>
          </div>
        </div>
        {footer}
      </div>
    );
  }
}


export default App;
