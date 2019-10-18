import React, {componet} from 'react';
import TodosItem from './Todositem';

class Todos extends React.Component{
render(){
 
  return this.props.todos.map((todo) =>(
       <TodosItem/>
  ));
}
}
export default Todos;
