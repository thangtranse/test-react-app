import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

test("should first", () => {
  expect(true).toBe(true);
});

test("should render todo with props.completed is true", () => {
  const props = { id: 1, title: "Xin chao", completed: true };
  render(<Todo todo={props} />);
  const todoElement = screen.getByTestId(`todo-${props.id}`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toContainHTML("strike");
  expect(todoElement).toHaveTextContent(props.title);
});

test("should render todo with props.completed is false", () => {
  const props = { id: 2, title: "Hello", completed: false };
  render(<Todo todo={props} />);
  const todoElement = screen.getByTestId(`todo-${props.id}`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).not.toContainHTML("<>");
  expect(todoElement).toHaveTextContent(props.title);
});

test("matches snapshot", () => {
  const props = { id: 2, title: "Hello", completed: false };
  const tree = renderer.create(<Todo todo={props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
