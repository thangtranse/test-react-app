import React from "react";
import MemoDocumentComponent from "./content";
const orders = [300, 200, 500];

function DocumentComponent() {
  console.log("Component Re-render (Don't use react memo)");
  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>React.useState</p>
      <ol>
        <li>
          Thực hiện 1 phép toán logic sau đó sử dụng kết quả đó gán cho State để
          sử dụng, tuy nhiên ta nhận thấy mỗi lần Re-render thì phép tính logic
          đó lại được thực thi lại
        </li>
        <li>
          Sử dụng sự kiện onClick để tăng giá trị của state count lên tuy nhiên
          nó không tăng theo ý muốn
        </li>
      </ol>
    </div>
  );
}

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
  console.log("re-render", "CountComponent");
  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>
        Ví dụ sử dụng component <i>DocumentComponent</i> khi không có{" "}
        <i>memo</i>, ta nhận thấy component bị re-render theo component cha.
      </p>
      <DocumentComponent />
      <h1>{count}</h1>
      <button onClick={handleClickCount}>click!</button>
      <h1>Default: {total}</h1>
    </div>
  );
}

function CountFirstComponent() {
  // Phép tính
  const totalFnc = orders.reduce((num, cur) => num + cur);
  console.log("Total after useState:", totalFnc);
  // ---------
  const [total, setTotal] = React.useState(totalFnc);
  const [count, setCount] = React.useState(0);

  const handleClickCount = () => {
    // -> Nếu gọi ntn thì react chỉ render đúng 1 lần tức giá trị chỉ +1
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  console.log("re-render", "CountFirstComponent");

  return (
    <div style={{ border: "2px solid #333", margin: 10, padding: 10 }}>
      <p>
        Ví dụ sử dụng component <i>DocumentComponent</i> có{" "}
        <i>memo</i>, ta nhận thấy component không bị re-render theo component cha.
      </p>
      <MemoDocumentComponent />
      <h1>{count}</h1>
      <button onClick={handleClickCount}>click!</button>
      <h1>Default: {total}</h1>
    </div>
  );
}

export { CountComponent, CountFirstComponent };
