import React from "react";

function OrialTestDocumentComponent() {
  return (
    <>
      <p>Orial test</p>
      <span>
        Server:{" "}
        <a
          href="https://codesandbox.io/s/coderschool-module-1-api-frcz3?file=/src/index.js"
          _target="_blank"
        >
          https://codesandbox.io/s/coderschool-module-1-api-frcz3?file=/src/index.js
        </a>
      </span>
      <ol>
        <li>Thực hiện gọi API sử dụng fetch1</li>
        <li>Render đữ liệu gọi được</li>
        <li>Thực hiện chức năng next, previous</li>
        <li>Thực hiện chức năng tìm kiếm</li>
      </ol>
    </>
  );
}

function RenderListTitle({ page, limit, search }) {
  const [datas, setDatas] = React.useState([]);
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = ({ page = 1, limit = 10, search }) => {
      let url = `https://frcz3.sse.codesandbox.io/jobs?_page=${page}&_limit=${limit}`;
      if (search) {
        url = `${url}&q=${search}`;
      }
      return fetch(url, {
        method: "GET",
      });
    };
    fetchData({ page, limit, search })
      .then((data) => data.json())
      .then((data) => setDatas(data || []))
      .catch((error) => setError(error.toString()));
  }, [page, limit, search]);

  if (isError) {
    return isError;
  }

  return (
    <ol>
      {datas.map((d, i) => (
        <li key={i}>{d.title}</li>
      ))}
    </ol>
  );
}

function OrialTestFirstComponent() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [search, setSearch] = React.useState("");
  const searchchElement = React.createRef("");

  return (
    <div style={{ background: "#3333338c", color: "#fff", padding: "30px" }}>
      <OrialTestDocumentComponent></OrialTestDocumentComponent>
      <hr />
      <input type={`text`} ref={searchchElement} />
      <button
        onClick={() => {
          setSearch(searchchElement.current.value);
        }}
      >
        Search
      </button>
      <br />
      <RenderListTitle page={page} limit={limit} search={search} />
      <br />
      <button
        onClick={() =>
          setPage((preState) => {
            if (preState - 1 < 0) return preState;
            return preState - 1;
          })
        }
      >
        Previous
      </button>{" "}
      ||{" "}
      <button onClick={() => setPage((preState) => preState + 1)}>Next</button>
    </div>
  );
}

export { OrialTestFirstComponent };
