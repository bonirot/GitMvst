import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "/Users/julia/Documents/AIT/git/workspace/GitMvst/src/components/Header/index.tsx";
import React from "react";
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
