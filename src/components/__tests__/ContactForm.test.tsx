import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
  it("renders the form heading", () => {
    render(<ContactForm />);
    expect(
      screen.getByText("We are present in over 150 countries"),
    ).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email address/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<ContactForm />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
});
