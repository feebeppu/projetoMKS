import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../Header/Header'
import Provider from '../../Context/AppContext'
import "@testing-library/jest-dom"

describe('Header', () => {
    it('should render correctly', () => {
        render(
            <Provider>
                <Header/>
            </Provider>
        )

        expect(screen.getByText("MKS")).toBeInTheDocument()
        expect(screen.getByText("Sistemas")).toBeInTheDocument()
    })

    it('should call onClick', () => {           
        render(
            <Provider>
                <Header/>
            </Provider>
        )

        const button = screen.getByRole("button")

        fireEvent.click(button)
    }) 
}) 