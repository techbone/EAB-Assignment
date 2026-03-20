import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutSection from "../AboutSection";

describe("AboutSection", () => {
  it("renders the heading", () => {
    render(<AboutSection />);
    expect(
      screen.getByText("A little bit about our work at EAB"),
    ).toBeInTheDocument();
  });

  it("renders the donate button", () => {
    render(<AboutSection />);
    expect(screen.getByText("Donate")).toBeInTheDocument();
  });

  it("renders partner logos", () => {
    render(<AboutSection />);
    expect(
      screen.getByAltText("Pestalozzi International Foundation"),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Teach For All")).toBeInTheDocument();
  });
});
