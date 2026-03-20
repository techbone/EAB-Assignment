import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ImpactSection from "../ImpactSection";

describe("ImpactSection", () => {
  it("renders the section title", () => {
    render(<ImpactSection />);
    expect(screen.getByText("The impact of EAB")).toBeInTheDocument();
  });

  it("renders all filter buttons", () => {
    render(<ImpactSection />);
    expect(screen.getByText("Filter 1")).toBeInTheDocument();
    expect(screen.getByText("Filter 2")).toBeInTheDocument();
    expect(screen.getByText("Filter 3")).toBeInTheDocument();
  });

  it("renders card titles", () => {
    render(<ImpactSection />);
    expect(
      screen.getAllByText("How EAB changed my life").length,
    ).toBeGreaterThanOrEqual(1);
  });
});
