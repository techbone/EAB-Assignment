import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SchoolsSection from "../SchoolsSection";

describe("SchoolsSection", () => {
  it("renders the heading", () => {
    render(<SchoolsSection />);
    expect(
      screen.getByText("We are present in over 150 countries"),
    ).toBeInTheDocument();
  });

  it("renders country names", () => {
    render(<SchoolsSection />);
    expect(screen.getByText("India")).toBeInTheDocument();
    expect(screen.getByText("France")).toBeInTheDocument();
    expect(screen.getAllByText("Germany").length).toBeGreaterThanOrEqual(1);
  });

  it("renders school card tags", () => {
    render(<SchoolsSection />);
    expect(screen.getByText("Alumni Network")).toBeInTheDocument();
    expect(screen.getByText("What's happening")).toBeInTheDocument();
  });
});
