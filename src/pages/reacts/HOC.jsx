import React from "react";
import GuideExampleLoadingList from "../../components/hoc/renderLoadingList/guideExample";
import GuideExampleScreen from "../../components/hoc/screen/guideExample";

// Page render
function HOCPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ margin: 30, padding: 30, border: "1px solid pink" }}>
      <p>
        <b>React Higher Order Component (HOC)</b> là một component nhận vào một
        component khác và trả về một component mới. HOC cung cấp một cách để
        chia sẻ logic giữa các component khác nhau mà không làm thay đổi cấu
        trúc component gốc.
        <br />
        <b>Higher Order Component (HOC)</b> là một kỹ thuật nâng cao trong
        React, giúp xử lý các logic cần tính toán trước khi render một
        component. Sau đó trả về một Component mà chúng ta muốn kết xuất.
      </p>
      <h3>Example:</h3>
      <GuideExampleLoadingList
        onChangeAccordion={handleChangeAccordion}
        propExpanded={expanded}
      />
      <GuideExampleScreen
        onChangeAccordion={handleChangeAccordion}
        propExpanded={expanded}
      />
    </div>
  );
}

export default HOCPage;
