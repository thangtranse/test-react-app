import React from "react";
import MemoDocumentComponent from "./content";
import ButtonComponent from "./button";

const orders = [300, 200, 500];

function CountComponent() {
  // Phép tính
  const [total, setTotal] = React.useState(() => {
    const totalFnc = orders.reduce((num, cur) => num + cur);
    console.log("React.useState", totalFnc);
    return totalFnc;
  });
  // ---------
  const [count, setCount] = React.useState(0);
  const handleClickCount = () => {
    // Callback -> gọi ntn thì giá trị sẽ lập tức +3
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setTotal(total + 1);
  };
  // ---------
  console.log("re-render", "Component Cha");
  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>
        Trong ví dụ này ta nhận thấy 1 điều khi thực hiện click vào button{` `}
        <i>
          <b>click!</b>
        </i>{" "}
        thì{` `}
        <i>component cha</i> và{` `}
        <i>component button</i> đều bị re-render tuy nhiên{` `}
        <i>component button</i> lại không cần thiết re-render vì nó chỉ nhận
        {` `}
        <u>dữ liệu tham chiếu</u> chứ không nhận <u>dữ liệu nguyên thủy</u>.
      </p>
      <MemoDocumentComponent />
      <h1>{count}</h1>
      <ButtonComponent onClickCount={handleClickCount}>click!</ButtonComponent>
      <h1>Default: {total}</h1>
    </div>
  );
}

function CountComponentUseCallback() {
  // Phép tính
  const [total, setTotal] = React.useState(() => {
    const totalFnc = orders.reduce((num, cur) => num + cur);
    console.log("React.useState", totalFnc);
    return totalFnc;
  });
  // ---------
  const [count, setCount] = React.useState(0);
  
  const handleClickCountUseCallback = React.useCallback(() => {
    // Callback -> gọi ntn thì giá trị sẽ lập tức +3
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setTotal(total + 1);
  }, []);

  // ---------
  console.log("re-render", "Component Cha");
  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>
        Trong ví dụ này ta nhận thấy 1 điều khi thực hiện click vào button{` `}
        <i>
          <b>click useCallback!</b>
        </i>{" "}
        thì{` `}
        <i>component cha</i> và{` `}
        <i>component button</i> không bị re-render.
      </p>
      <MemoDocumentComponent />
      <h1>{count}</h1>
      <ButtonComponent onClickCount={handleClickCountUseCallback}>
        click useCallback!
      </ButtonComponent>
      <h1>Default: {total}</h1>
    </div>
  );
}

export { CountComponent, CountComponentUseCallback };
