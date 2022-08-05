import Todo from "./components/todo";
import HelloWorld from "./components/helloWorld";

function App() {
  const todo = [
    { id: 1, title: "Xin chao", completed: true },
    { id: 2, title: "Hello", completed: false },
  ];
  return (
    <div className="App">
      <HelloWorld />
      <hr />
      {todo.map((data, index) => {
        return <Todo key={`todo-${index}`} todo={data} />;
      })}
    </div>
  );
}

export default App;
