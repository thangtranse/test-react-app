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
  return <OrialTestFirstComponent />;
}

export default Home;
