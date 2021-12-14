import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../Home";

it("Valid welcome mensage", async () => {
  const { getByText, queryAllByText } = render(<Home />);
  
  getByText("Welcome Back!");
  expect(queryAllByText("Welcome Back!").length).toBe(1);
  expect(queryAllByText("Welcome Back!")).toMatchSnapshot();
});