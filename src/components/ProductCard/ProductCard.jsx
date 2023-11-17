import { useContext } from "react"
import propTypes from "prop-types"
import { LuShoppingBag } from "react-icons/lu"

import { CardBtn, CardDiv, CardSection } from "../../styles/styles"
import { AppContext } from "../../Context/AppContext"
import formatCurrency from "../../utils/formatCurrency"

export default function ProductCard( { data }) {

    const { name, price, photo, description } = data
    
    const { cartItems, setCartItems } = useContext(AppContext)

	function handleAddCart() {
		setCartItems([...cartItems, data])
	}

    return(
        <CardSection>
            <img src={photo} alt="product photo"/>
                
            <CardDiv>
                {name} 
                <p>{formatCurrency(parseInt(price), 'BRL')}</p>
            </CardDiv>
            
            <article>
                {description}   
            </article>
            
            <CardBtn onClick={ handleAddCart }>
                <LuShoppingBag size={20}/>
                COMPRAR
            </CardBtn>
        </CardSection> 
    )
}

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired