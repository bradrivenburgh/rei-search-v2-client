import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateAccount from "./CreateAccount";

describe("CreateAccount", () => {
  test("renders to the DOM", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    );
  });

  test("contains a heading,'Sign-up'", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Sign-up");
  });

  test("contains a form with required input fields", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>
    );

    const labels = [
      "User Name:",
      "First Name:",
      "Last Name:",
      "Password:",
      "Repeat Password:",
    ];

    labels.forEach((label) => {
      const element = screen.getByLabelText(`${label}`);
      expect(element).toBeInTheDocument();
    });
  });

  test("contains 'Submit' and 'Cancel' buttons", () => {
    render(
      <BrowserRouter>
        <CreateAccount />
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
        <CreateAccount />
      </BrowserRouter>
    );

    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });
});
