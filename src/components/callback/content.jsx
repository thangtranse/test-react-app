import React, { memo } from "react";

function DocumentComponent() {
  console.log("Component Re-render");
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

export default memo(DocumentComponent);
