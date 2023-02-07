import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import AccordionCustomComponent from "../AccordionCustom";

const CompareUseCallBackAndUseMemo = () => {
  return (
    <>
      <AccordionCustomComponent
        title={`useCallback và useMemo`}
        subTitle={`So sánh`}
      >
        <p>
          useCallback và useMemo là hai hook trong React, chúng ta sử dụng chúng
          để tối ưu hoá performance của ứng dụng.
        </p>
        <p>
          useCallback cho phép bạn memoize một hàm và chỉ render lại khi những
          dependencies của nó thay đổi. Điều này giúp giảm số lần render của
          component và tăng tốc độ của ứng dụng.
        </p>
        <p>
          useMemo cho phép bạn memoize một giá trị và chỉ tính toán lại giá trị
          đó khi những dependencies của nó thay đổi. Điều này giúp giảm số lần
          tính toán của component và tăng tốc độ của ứng dụng.
        </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flexGrow: 2 }}>
            <CopyBlock
              language={"jsx"}
              text={`const MyComponent = ({ data }) => {
const memoizedCallback = useCallback(() => {
    console.log("I am a memoized callback");
}, []);

const memoizedValue = useMemo(() => {
    console.log("I am a memoized value");
    return data.length;
}, [data]);

return (
    <div>
    <button onClick={memoizedCallback}>Click me</button>
    <p>{memoizedValue}</p>
    </div>
);
};`}
              showLineNumbers={true}
              theme={dracula}
              wrapLines={false}
              codeBlock
            />
          </div>
          <div style={{ flexGrow: 1 }}></div>
        </div>
      </AccordionCustomComponent>
    </>
  );
};

const ExampleUseCallBackAndUseMemo = () => {
  return (
    <AccordionCustomComponent
      title={`useCallback và useMemo`}
      subTitle={`Thêm ví dụ`}
    >
      <p>Ví dụ về sử dụng useCallback:</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flexGrow: 2 }}>
          <CopyBlock
            language={"jsx"}
            text={`import React, { useState, useCallback } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  // Chỉ tạo lại callback khi count thay đổi
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={false}
            codeBlock
          />
        </div>
        <div style={{ flexGrow: 1 }}></div>
      </div>
      <p>Ví dụ về sử dụng useMemo:</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flexGrow: 2 }}>
          <CopyBlock
            language={"jsx"}
            text={`import React, { useState, useMemo } from 'react';

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Chỉ tính toán lại khi count1 hoặc count2 thay đổi
  const total = useMemo(() => count1 + count2, [count1, count2]);

  return (
    <div>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <p>Total: {total}</p>
      <button onClick={() => setCount1(c => c + 1)}>Increment Count 1</button>
      <button onClick={() => setCount2(c => c + 1)}>Increment Count 2</button>
    </div>
  );
}`}
            showLineNumbers={true}
            theme={dracula}
            wrapLines={false}
            codeBlock
          />
        </div>
        <div style={{ flexGrow: 1 }}></div>
      </div>
      <p>
        Trong ví dụ trên, useMemo sẽ chỉ tính toán lại giá trị cho total khi
        count1 hoặc count2 thay đổi, giúp tối ưu hóa hiệu suất.
      </p>
    </AccordionCustomComponent>
  );
};
export { CompareUseCallBackAndUseMemo, ExampleUseCallBackAndUseMemo };
