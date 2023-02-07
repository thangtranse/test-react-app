import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

function ReactPage() {
  return (
    <>
      <p>
        <b>"Lifting state up"</b> in React refers to a technique where you move
        a state from a child component to a higher-level (i.e. parent) component
        in order to share it among multiple child components. The parent
        component becomes the single source of truth for the state, and the
        child components receive the state as props. This technique is useful
        when you have components that need to access and update the same data,
        as it ensures that the state is managed consistently and in a single
        place.
      </p>
      <p>
        Here's a simple example to demonstrate lifting state up in React: Let's
        say we have two components, a parent component called App and a child
        component called Counter. The Counter component needs to display a
        number and also allow the user to increment and decrement the number.
        Initially, the state is stored in the Counter component:
      </p>
      <CopyBlock
        language={"jsx"}
        text={`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}`}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={false}
        codeBlock
      />
      <p>
        Now, suppose we want to use two instances of the Counter component, one
        to keep track of the number of apples and another to keep track of the
        number of bananas. To do this, we'll lift the state up to the parent App
        component:
      </p>
      <CopyBlock
        language={"jsx"}
        text={`function App() {
  const [apples, setApples] = useState(0);
  const [bananas, setBananas] = useState(0);
  
  return (
    <div>
      <Counter count={apples} setCount={setApples} />
      <Counter count={bananas} setCount={setBananas} />
    </div>
  );
}`}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={false}
        codeBlock
      />
      <p>
        In this example, the App component is responsible for managing the state
        and passing it down to the child Counter components as props. The child
        components no longer manage their own state, but instead use the props
        they receive to render and update the state.
      </p>
    </>
  );
}

export default ReactPage;
