import {
  CountComponent,
  CountFirstComponent,
} from "../../components/memo/count";

function MemoPage() {
  return (
    <>
      <p>
        <b>React.memo</b> is a <u>higher-order component (HOC)</u> that can be used to wrap
        functional components to prevent unnecessary re-renders. It does this by
        checking if the props passed to the component have changed, and only
        re-renders if there has been a change.
      </p>
      <CountComponent />
      <CountFirstComponent />
    </>
  );
}

export default MemoPage;
