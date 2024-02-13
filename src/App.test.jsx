import { test, expect, describe } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders the initial todo list correctly", async () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    expect(getByText("My Todos")).not.toBeNull();

    expect(
      getByPlaceholderText("What's the title of your To Do?"),
    ).not.toBeNull();
    expect(
      getByPlaceholderText("What's the description of your To Do?"),
    ).not.toBeNull();
  });

});
