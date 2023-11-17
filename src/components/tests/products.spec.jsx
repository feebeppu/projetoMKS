import { render } from '@testing-library/react'
import Products from '../Products/Products'
import { QueryClientProvider, QueryClient } from 'react-query'
import Provider from '../../Context/AppContext'
import "@testing-library/jest-dom"

describe('Products', () => {
    it('should render correctly', () => {
        const queryClient = new QueryClient()

        render(
            <Provider>
                <QueryClientProvider client={queryClient}>
                    <Products/>
                </QueryClientProvider>
            </Provider>
        )

    })
}) 