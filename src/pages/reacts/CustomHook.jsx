import { useState } from "react";

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => {
    setValue(!value);
  };
  return [value, toggleValue];
}

// You can then use this hook in your component like this:

function MyComponent() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <p>The value is: {value.toString()}</p>
      <button onClick={toggleValue}>Toggle</button>
    </div>
  );
}

function CustomHookPage() {
  return (
    <>
      <p>
        A <b>custom hook</b> is a JavaScript function with a name starting with "use"
        that can call other hooks. Custom hooks allow you to extract state logic
        and use it in multiple components. It's a way to reuse stateful logic
        across your components. You can create a custom hook for tasks such as
        managing state, handling side effects, or even creating your own hooks
        to abstract logic that you need across your components. Here is an
        example of a simple custom hook to manage the state of a toggle button:
      </p>
      <MyComponent />
    </>
  );
}

export default CustomHookPage;
