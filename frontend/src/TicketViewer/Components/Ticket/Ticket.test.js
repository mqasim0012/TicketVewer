import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom';
import Ticket from '.'

describe("Test ticket component behavior", () => {
    test('Ticket renders correctly', () => {
        const sampleTicket = renderer.create(
            <Ticket
                status="closed"
                subject="Need help"
                description="This feature does not work"
            />
        )

        const tree = sampleTicket.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("Ticket button click test", () => {
        render(<Ticket
                status="open"
                subject="sub"
                description="descr"
             />)
        expect(screen.getByRole('button')).toHaveTextContent('View Details');

        fireEvent.click(screen.getByRole("button"));
        
        expect(screen.getByRole('button')).toHaveTextContent('Go back to all tickets');
    })

})