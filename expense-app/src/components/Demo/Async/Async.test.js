import { render, screen } from '@testing-library/react';
import Async from './Async';

describe("Async Component", () => {
    test("renders 'li' element when call is successful", async () => {
        render(<Async />)

        const allListElements = await screen.findAllByRole("listitem", {}, { interval: 10000 });
        expect(allListElements).not.toHaveLength(0)
    })
})