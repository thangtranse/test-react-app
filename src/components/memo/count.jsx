import React from "react";
import MemoDocumentComponent from "./content";

function DocumentComponent() {
  console.log("Component Re-render (Don't use react memo)");
  return (
    <div
      style={{
        border: "2px solid #333",
        margin: 10,
        padding: 10,
      }}
    >
      <p>Render: Component Re-render (Don't use react memo)</p>
    </div>
  );
}

function CountComponent() {
  // ---------
  const [count, setCount] = React.useState(0);
  const handleClickCount = () => {
    setCount((prevState) => prevState + 1);
  };
  console.log("re-render", "CountComponent");
  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>
        Ví dụ sử dụng component <i>DocumentComponent</i> khi không có{" "}
        <i>memo</i>, ta nhận thấy component bị re-render theo component cha.
      </p>
      <DocumentComponent />
      <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
        <h1>{count}</h1>
        <button onClick={handleClickCount}>click!</button>
      </div>
    </div>
  );
}

function CountFirstComponent() {
  const [count, setCount] = React.useState(0);
  const handleClickCount = () => {
    setCount(count + 1);
  };
  console.log("re-render", "CountFirstComponent");
  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>
        Ví dụ sử dụng component <i>DocumentComponent</i> có <i>memo</i>, ta nhận
        thấy component không bị re-render theo component cha.
      </p>
      <MemoDocumentComponent />
      <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
        <h1>{count}</h1>
        <button onClick={handleClickCount}>click!</button>
      </div>
    </div>
  );
}

export { CountComponent, CountFirstComponent };
