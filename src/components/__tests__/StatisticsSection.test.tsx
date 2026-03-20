import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StatisticsSection from "../StatisticsSection";

describe("StatisticsSection", () => {
  it("renders the section heading", () => {
    render(<StatisticsSection />);
    expect(screen.getByText("EAB.")).toBeInTheDocument();
    expect(
      screen.getByText("A global education made here."),
    ).toBeInTheDocument();
  });

  it("renders all stat values", () => {
    render(<StatisticsSection />);
    expect(screen.getByText("90%")).toBeInTheDocument();
    expect(screen.getByText("TOP 100")).toBeInTheDocument();
    expect(screen.getByText("$3 million")).toBeInTheDocument();
  });

  it("renders the mission text", () => {
    render(<StatisticsSection />);
    expect(
      screen.getByText(/At EAB, our mission is to inspire/),
    ).toBeInTheDocument();
  });
});
