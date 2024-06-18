import { it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import CardSkeletonProfile from "../../src/components/CardSkeletonProfile";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Header", () => {
  it("should render the CardSkeletonProfile component", () => {
    render(
      <BrowserRouter>
        <CardSkeletonProfile />
      </BrowserRouter>
    );
    screen.debug();
  });
});
