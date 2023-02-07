import React from "react";
import { UserList } from "./renderUserList";
import withLoading from "./withLoading";

const EnhancedUserList = withLoading(UserList);

class App extends React.Component {
  render() {
    return (
      <EnhancedUserList
        isLoading={false}
        users={[{ id: 1, name: "Tran Minh Thang" }]}
      />
    );
  }
}

export default App;
