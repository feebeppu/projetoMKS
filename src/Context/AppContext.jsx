import { useState } from "react"
import propTypes from "prop-types"
import { createContext } from "react"

export const AppContext = createContext()

function Provider({ children }) {

	const [cartItems, setCartItems] = useState([])
	const [isCartVisible, setIsCartVisible] = useState(false)

	const value = {
		cartItems, 
		setCartItems,
		isCartVisible,
		setIsCartVisible
	}

	return(
		<AppContext.Provider value={ value }>
			{children}
		</AppContext.Provider>
	)
}

export default Provider

Provider.propTypes = {
	children: propTypes.any,
}.isRequired