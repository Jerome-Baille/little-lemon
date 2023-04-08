import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Chicago from "./components/Home/Chicago";
import Header from "./components/Header";
import BookingForm from "./components/Booking/index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

jest.mock("./context/alertContext", () => ({
    useAlertContext: () => ({
      onOpen: jest.fn(),
      onClose: jest.fn(),
    }),
  }));

describe("Header", () => {
  it("make sure the navbar contains all the element we need", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("Reservations")).toBeInTheDocument();
    expect(screen.getByText("Order Online")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});

describe("Chicago", () => {
  it("renders a Chicago component", () => {
    render(
      <BrowserRouter>
        <Chicago />
      </BrowserRouter>
    );
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });
});

describe("BookingForm", () => {
  it("renders a form with the correct fields", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );
    expect(screen.getByTestId("date")).toBeInTheDocument();
    expect(screen.getByTestId("time")).toBeInTheDocument();
    expect(screen.getByTestId("guests")).toBeInTheDocument();
    expect(screen.getByTestId("occasion")).toBeInTheDocument();
    expect(screen.getByTestId("firstName")).toBeInTheDocument();
    expect(screen.getByTestId("lastName")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

describe("BookingForm", () => {
    test("User is able to submit a valid form on button click", () => {
      const handleSubmit = jest.fn();
      render(<BookingForm onSubmit={handleSubmit} />);
  
      // Fill in the form with valid inputs
      const dateInput = screen.getByTestId("date");
      fireEvent.change(dateInput, { target: { value: "2023-05-01" } });
  
      const timeInput = screen.getByTestId("time");
      fireEvent.change(timeInput, { target: { value: "17:00" } });
  
      const guestsInput = screen.getByTestId("guests");
      fireEvent.change(guestsInput, { target: { value: 2 } });
  
      const occasionInput = screen.getByTestId("occasion");
      fireEvent.change(occasionInput, { target: { value: "birthday" } });
  
      const firstNameInput = screen.getByTestId("firstName");
      fireEvent.change(firstNameInput, { target: { value: "John" } });
  
      const lastNameInput = screen.getByTestId("lastName");
      fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  
      const emailInput = screen.getByTestId("email");
      fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
  
      // Submit the form by clicking the button
      const submitButton = screen.getByRole("button");
      fireEvent.click(submitButton);

        expect(submitButton).toBeEnabled();
    });
  });  
  
  