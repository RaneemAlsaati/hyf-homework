import Todos from './component/Todo';
import './App.css'
class App extends React.Component{
  state ={
  todos : [
    {
    title: "Get of the bed", date: "Wed Sep 13 2017"},   {title: "Brush teeth", date: "Thu Sep 14 2017"},  {title: "Eat breakfast", date: "fri Sep 15 2017"
    }

  ]
  }
render(){
  console.log(this.state.todos)
  return (
    <div className ="App">
    <Todos todos={this.state.todos}/>
    </div>
  );
}
}
export default App;
