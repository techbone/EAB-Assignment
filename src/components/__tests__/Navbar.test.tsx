import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders the EAB logo text", () => {
    render(<Navbar />);
    expect(screen.getAllByText("EAB")[0]).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("About us")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Why EAB")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Support us")[0]).toBeInTheDocument();
  });

  it("renders Apply and Donate buttons", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Apply")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Donate")[0]).toBeInTheDocument();
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleBtn);
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });

  it("expands About us children in mobile menu", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByLabelText("Toggle menu"));
    const aboutButtons = screen.getAllByText("About us");
    // Click the mobile menu button (last one)
    fireEvent.click(aboutButtons[aboutButtons.length - 1]);
    expect(screen.getByText("What is EAB")).toBeInTheDocument();
    expect(screen.getByText("EAB history")).toBeInTheDocument();
    expect(screen.getByText("Our structure")).toBeInTheDocument();
  });
});
