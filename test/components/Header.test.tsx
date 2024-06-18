import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../../src/components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Header", () => {
  it("should render the Header component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("GitMvst");
  });
});
