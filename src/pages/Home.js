import Todo from "../components/todo";
import HelloWorld from "../components/helloWorld";
import { CountComponent, CountFirstComponent } from "../components/count/count";
import { OrialTestFirstComponent } from "../components/orialTest";
const todo = [
  { id: 1, title: "Xin chao", completed: true },
  { id: 2, title: "Hello", completed: false },
  { id: 3, title: "Hi", completed: false },
  { id: 4, title: "Chao", completed: false },
  { id: 5, title: "Hu hu", completed: false },
];

function Home() {
  return (
    <div className="App">
      <HelloWorld />
      <hr />
      {todo.map((data, index) => {
        return <Todo key={`todo-${index}`} todo={data} />;
      })}
      <hr />
      <hr />
      <OrialTestFirstComponent />
      <hr />
      <hr />
      <CountComponent />
      <CountFirstComponent />
    </div>
  );
}

export default Home;