import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greetings from './Greetings';

describe("Greetings Component", () => {

    test("renders the 'DemoOutput' Component", () => {
        render(<Greetings />)
        const childElement = screen.getByText(/demo output/i)
        expect(childElement).toBeInTheDocument();
    })

    test("should not render 'good to see you', when button is clicked", () => {
        render(<Greetings />)
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)
        const paragraphElement = screen.queryByText(/good to see you/i);
        expect(paragraphElement).toBeNull();
    })

    test("renders 'Changed', when button is clicked", () => {
        // Arrange
        render(<Greetings />)
        // Act
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)
        // Assert
        const paragraphEleemnt = screen.getByText(/changed/i)
        expect(paragraphEleemnt).toBeInTheDocument()

    })

    test("renders 'good to see you' when button is NOT clicked", () => {
        render(<Greetings />)
        const paragraphElement = screen.getByText(/good to see you/i);
        expect(paragraphElement).toBeInTheDocument()
    })



    test("renders 'Good Morning' on the UI", () => {
        // A : Arrange the resources which participate in test
        render(<Greetings />)

        // A : Act - calling the function

        // A : Assert - setting the expectation
        const headingElement = screen.getByText(/Good Morning/i)
        expect(headingElement).toBeInTheDocument()

    })



})
