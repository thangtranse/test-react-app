export default function withLoading(WrappedComponent) {
  return function (props) {
    return props.isLoading ? (
      <div>Loading...</div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
}
