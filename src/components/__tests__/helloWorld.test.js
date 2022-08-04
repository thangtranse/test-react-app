import { render, screen } from "@testing-library/react";
import HelloWorld from "../helloWorld";

test("should render content text", () => {
  render(<HelloWorld />);
  // https://testing-library.com/docs/queries/bytestid
  const todoElement = screen.getByTestId("helloWorld");
  // https://github.com/testing-library/jest-dom#tobeinthedocument
  // toBeInTheDocument() -> This allows you to assert whether an element is present in the document or not.
  expect(todoElement).toBeInTheDocument();
});

test("should render content 'Hello World!'", () => {
  render(<HelloWorld />);
  const todoElement = screen.getByTestId("helloWorld");
  expect(todoElement).toBeInTheDocument();
  // https://github.com/testing-library/jest-dom#tobeinthedocument
  // toHaveTextContent() -> This allows you to check whether the given node has a text content or not. This supports elements, but also text nodes and fragments.
  expect(todoElement).toHaveTextContent("Hello World!");
});
