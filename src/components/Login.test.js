import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("contains a heading,'Sign-up'", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Login");
  });

  test("contains a form with required input fields", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const labels = ["User Name:", "Password:"];

    labels.forEach((label) => {
      const element = screen.getByLabelText(`${label}`);
      expect(element).toBeInTheDocument();
    });
  });

  test("contains 'Submit' and 'Cancel' buttons", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const submitBtn = screen.getByRole("button", { name: "Submit" });
    const cancelBtn = screen.getByRole("button", { name: "Cancel" });
    expect(submitBtn).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
  });

  test("checks to make sure Submit button is disabled while required fields are empty", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });
});
