import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../../src/components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("should render the Header component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    screen.debug();
  });
});
