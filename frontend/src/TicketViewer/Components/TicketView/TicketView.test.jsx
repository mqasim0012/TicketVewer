import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom';
import TicketView from '.'

describe("Testing ticket viewer dashboard", () => {
    test("Test renders correctly", ()=>{

        const sampleTicket = renderer.create(
            <TicketView
            />
        )

        const tree = sampleTicket.toJSON();
        expect(tree).toMatchSnapshot();
    })

    // test("Prev and next buttons", () => {

    //     render(<TicketView />)
    // })
})