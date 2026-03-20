import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeroBanner from "../HeroBanner";

describe("HeroBanner", () => {
  it("renders the heading", () => {
    render(<HeroBanner />);
    expect(
      screen.getByText("How will you make your mark?"),
    ).toBeInTheDocument();
  });

  it("renders the apply link", () => {
    render(<HeroBanner />);
    expect(screen.getByText("Apply to study")).toBeInTheDocument();
  });
});
