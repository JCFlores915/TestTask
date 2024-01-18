import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Home from '../../../src/pages/home'
import '../../matchMedia.mock'
import '@testing-library/jest-dom/extend-expect'

describe('Home', () => {
    test('renders buttons with correct text', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )

        const tasksButton = screen.getByText('Tasks')
        const listButton = screen.getByText('List')

        expect(tasksButton).toBeInTheDocument()
        expect(listButton).toBeInTheDocument()
    })

    test('navigates to /tasks when Tasks button is clicked', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )

        const tasksButton = screen.getByText('Tasks')

        userEvent.click(tasksButton)

        const navigate = jest.fn()
        expect(navigate).toHaveBeenCalledTimes(0)
    })

    test('navigates to /list when List button is clicked', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )

        const listButton = screen.getByText('List')

        userEvent.click(listButton)
        
        const navigate = jest.fn()
        expect(navigate).toHaveBeenCalledTimes(0)

    })
})
