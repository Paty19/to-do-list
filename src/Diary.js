import { Component } from "react";
import check from './check.png';

export class Diary extends Component{
state={
    userInput: ' ',
    diary:[]
}
onChangeEvent(e)  {
  this.setState({userInput: e});  
} 
addItem(input){
    if (input=== '') {
      alert ("Напишите что-нибудь...")  
    } else{
      let listArray= this.state.diary;
      listArray.push(input);
      this.setState({diary: listArray,userInput: ''}); 
    }
}
deleteItem(){
    let listArray=this.state.diary; 
    listArray=[];
    this.setState({diary: listArray}); 
}

crossedWord(event){
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e){
  e.preventDefault();
}

render(){
   return(
<div>
<form onSubmit={this.onFormSubmit} >

<div className="container">

<input type="text" className="one"
placeholder="Какие у вас планы?"
onChange={(e)=>{ this.onChangeEvent(e.target.value)}}
value={this.state.userInput}/>
</div>

<div className="container">

<button onClick={()=>this.addItem(this.state.userInput) }  className="btn add">Добавить</button>
 </div>


<ul>

{this.state.diary.map((item, index) => (

  <li onClick={this.crossedWord} key={index} >

  <img src={check} width="40px" alt="check-box"  />
{item}

</li>
))}

</ul>


<div className="container">
<button onClick={()=>this.deleteItem()}  className="btn delete">Удалить</button>
</div>

</form>
</div>

) 
}

}
