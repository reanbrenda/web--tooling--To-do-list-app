import { test, expect, describe } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders the initial todo list correctly", async () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    expect(getByText("My Todos")).not.toBeNull();

    expect(getByPlaceholderText("What's the title of your To Do?")).not.toBeNull();
    expect(getByPlaceholderText("What's the description of your To Do?")).not.toBeNull();
  });
  test("adds a todo when the form is submitted", () => {
    const { getByPlaceholderText, getByText, getAllByTestId } = render(<App />);

    const input = getByPlaceholderText("Add new todo");
    const button = getByText("Add");

    expect(getByPlaceholderText("Add new todo").value).toBe("");
    fireEvent.change(input, { target: { value: "Test Todo" } });

    expect(getByPlaceholderText("Add new todo").value).toBe("Test Todo");

    fireEvent.click(button);
    expect(getByPlaceholderText("Add new todo").value).toBe("");

    expect(getAllByTestId("TodoItemTitle")).toHaveLength(1);
    expect(getAllByTestId("TodoItemTitle")[0].textContent).toBe("Test Todo");
  });


});
