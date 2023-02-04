import React from "react";

const ExampleContext = React.createContext();

const ChildComponent = () => {
  const { color } = React.useContext(ExampleContext);
  return <p style={{ color }}>This text is {color}</p>;
};

function UseContextPage() {
  return (
    <>
      <h1>useContext</h1>
      <span>Chia sẻ state giữa các component</span>
      <hr />
      <ExampleContext.Provider value={{ color: "red" }}>
        <div className="App">
          <ChildComponent />
        </div>
      </ExampleContext.Provider>
    </>
  );
}

export default UseContextPage;
