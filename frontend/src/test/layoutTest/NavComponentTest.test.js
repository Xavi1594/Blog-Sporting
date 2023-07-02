import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavComponent } from "../../components/layout/NavComponent";
import '@testing-library/jest-dom';


describe("NavComponent", () => {
  it("renders an h1 element", () => {
    render(
      <Router>
        <NavComponent />
      </Router>
    );
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });
});
