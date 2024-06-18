import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Repo from "../../src/components/Repository";
import "@testing-library/jest-dom/vitest";

describe("Repo Component", () => {
  it("should render the Repo component with name and description", () => {
    const props = {
      id: 1,
      name: "Repository name",
      description: "This is a test repository",
    };

    render(<Repo {...props} />);

    const nameElement = screen.getByText("Repository name");
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = screen.getByText("This is a test repository");
    expect(descriptionElement).toBeInTheDocument();

    screen.debug();
  });

  it("should render the Repo component with null description", () => {
    const props = {
      id: 1,
      name: "Repository name",
      description: null,
    };

    render(<Repo {...props} />);

    const nameElement = screen.getByText("Repository name");
    expect(nameElement).toBeInTheDocument();

    const descriptionElement = screen.getByText((content, element) => {
      return (
        element?.className === "repositoryContainer_card-description" &&
        element.textContent === ""
      );
    });
    expect(descriptionElement).toBeInTheDocument();

    screen.debug();
  });
});
