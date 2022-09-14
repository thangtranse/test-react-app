import Todo from "./components/todo";
import HelloWorld from "./components/helloWorld";
import CountComponent from "./components/count/count";
function App() {
  
  const todo = [
    { id: 1, title: "Xin chao", completed: true },
    { id: 2, title: "Hello", completed: false },
    { id: 3, title: "Hi", completed: false },
    { id: 4, title: "Chao", completed: false },
    { id: 5, title: "Hu hu", completed: false },
  ];

  return (
    <div className="App">
      <HelloWorld />
      <hr />
      {todo.map((data, index) => {
        return <Todo key={`todo-${index}`} todo={data} />;
      })}
      <hr />
      <hr />
      <CountComponent />
    </div>
  );
}

export default App;
