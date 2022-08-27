import React from "react";

function CountComponent() {
  const [count, setCount] = React.useState(0);

  const handleClickCount = () => {

    // -> Nếu gọi ntn thì react chỉ render đúng 1 lần tức giá trị chỉ +1
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // Callback -> gọi ntn thì giá trị sẽ lập tức +3
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    
  };

  console.log("re-render");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClickCount}>click!</button>
    </>
  );
}

export default CountComponent;
