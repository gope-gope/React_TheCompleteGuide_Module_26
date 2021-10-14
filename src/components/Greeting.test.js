import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("Renders Hello world!", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //nothing...

    //Assert
    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });

  test("Renders ... it is good to see you. if the button was NOT clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const element = screen.getByText("... it is good to see you.");
    expect(element).toBeInTheDocument();
  });

  test("Renders Changed if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const element = screen.getByText("Changed");
    expect(element).toBeInTheDocument();
  });

  test("Does not render ... it is good to see you. if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const element = screen.queryByText("... it is good to see you.");
    expect(element).toBeNull();
  });
});
