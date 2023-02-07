// Function component
export const UserList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
