import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders the EAB logo", () => {
    render(<Footer />);
    expect(screen.getByText("EAB")).toBeInTheDocument();
  });

  it("renders quick links headings", () => {
    render(<Footer />);
    expect(screen.getAllByText("Quick links").length).toBe(2);
  });

  it("renders footer bar links", () => {
    render(<Footer />);
    expect(screen.getByText("Sitemap")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2017 – 2024 EAB International/),
    ).toBeInTheDocument();
  });

  it("renders website design credit", () => {
    render(<Footer />);
    expect(screen.getByText("Website Design By")).toBeInTheDocument();
  });
});
