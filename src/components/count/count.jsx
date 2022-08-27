import React from "react";

const orders = [300, 200, 500];

function CountComponent() {
  // const totalFnc = orders.reduce((num, cur) => num + cur);
  // console.log(totalFnc);
  // const [total, setTotal] = React.useState(totalFnc);
  const [total, setTotal] = React.useState(() => {
    const totalFnc = orders.reduce((num, cur) => num + cur);
    console.log(totalFnc);
    return totalFnc;
  });

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

    setTotal(total + 1);
  };

  console.log("re-render");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClickCount}>click!</button>
      <h1>Default: {total}</h1>
    </>
  );
}

export default CountComponent;
