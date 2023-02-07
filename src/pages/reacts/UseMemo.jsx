import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

function useMemoPage() {
  return (
    <>
      <p>
        Sử dụng memoization có thể giúp tăng tốc độ cho component bằng cách lưu
        trữ kết quả tính toán của component trước đó và trả về kết quả đã lưu
        khi component chạy lại với cùng input.
      </p>
      <p>Ví dụ:</p>
      <CopyBlock
        language={"jsx"}
        text={`import React, { useMemo } from 'react';

function MyComponent({ data }) {
  const processedData = useMemo(() => doExpensiveCalculation(data), [data]);
  return (
    <div>
      {processedData}
    </div>
  );
}

function doExpensiveCalculation(data) {
  // perform expensive calculation here
  return result;
}`}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={false}
        codeBlock
      />
      <p>
        Trong ví dụ trên, chúng ta sử dụng useMemo để tính toán processedData
        chỉ khi data thay đổi. Kết quả tính toán được lưu trữ trong bộ nhớ và sẽ
        được trả về mà không cần tính toán lại khi component chạy lại với cùng
        input.
      </p>
      <p>
        Nếu không sử dụng useMemo, mỗi khi có sự thay đổi trong props hoặc
        state, React sẽ tính toán lại toàn bộ component, bao gồm cả những phần
        có thể không cần thiết. Điều này có thể làm giảm hiệu năng của ứng dụng
        và tăng thời gian tải trang. Sử dụng useMemo sẽ giúp React tính toán lại
        chỉ khi cần thiết, giảm tải trên máy chủ và tăng tốc độ tải trang cho
        người dùng.
      </p>
    </>
  );
}

export default useMemoPage;
