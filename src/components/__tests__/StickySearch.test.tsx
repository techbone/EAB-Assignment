import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StickySearch from "../StickySearch";

describe("StickySearch", () => {
  it("renders the help text", () => {
    render(<StickySearch />);
    expect(screen.getByText("How can we help you?")).toBeInTheDocument();
  });

  it("renders the dismiss button", () => {
    render(<StickySearch />);
    expect(screen.getByLabelText("Dismiss")).toBeInTheDocument();
  });

  it("dismisses when X is clicked", () => {
    render(<StickySearch />);
    fireEvent.click(screen.getByLabelText("Dismiss"));
    expect(screen.queryByText("How can we help you?")).not.toBeInTheDocument();
  });
});
