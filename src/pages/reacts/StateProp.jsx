import React from "react";

function ChildComponent({ countData, setCountFnc }) {
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    console.log("ChildComponent", "Sinh ra");
    return () => {
      console.log("ChildComponent", "Mất đi");
    };
  }, []); // chỉ render ở lần đầu tiên

  React.useEffect(() => {
    console.log("ChildComponent", "listen state `page`", page);
  }, [page]); // lắng nge giá trị page

  React.useEffect(() => {
    console.log("ChildComponent", "listen state `page`", page);
  }, [page, countData]); // lắng nge giá trị page

  console.log("ChildComponent", "render Con");
  return (
    <div style={{ margin: 30, padding: 30, border: "1px solid pink" }}>
      Child-Component
      <h1>{countData}</h1>
      <button onClick={() => setCountFnc(countData - 1)}>Click Down</button>
      <h1>Page: {page}</h1>
      <button onClick={() => setPage(page + 1)}>Click Page</button>
    </div>
  );
}

function StatePropPage() {

  const [count, setCount] = React.useState(() => {
    return 1;
  });
  
  const [disableChild, setDisableChild] = React.useState(true);

  React.useEffect(() => {
    console.log("nhi", "Mẹ: useEffect");
  });

  console.log("nhi", "render Mẹ");
  return (
    <div style={{ margin: 30, padding: 30, border: "1px solid #333" }}>
      <h1>State and Prop</h1>
      <hr />
      {count}
      <br />
      <button
        onClick={() =>
          setCount((preState) => {
            return preState + 1;
          })
        }
      >
        Click Up
      </button>

      <button onClick={() => setDisableChild(!disableChild)}>Swap: {disableChild ? 'true' : 'false'}</button>

      {disableChild ? (
        <ChildComponent countData={count} setCountFnc={setCount} />
      ) : null}
    </div>
  );
}

export default StatePropPage;
