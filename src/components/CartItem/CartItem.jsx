import propTypes from "prop-types"

import { CartItemContainer, CartItemContent, CartItemImage } from "../../styles/styles"
import { BsCartDashFill } from "react-icons/bs"
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

import formatCurrency from "../../utils/formatCurrency"


export default function CartItem( { data } ) {

    const { cartItems, setCartItems } = useContext(AppContext)
    const { id, photo, name, price } = data

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id)
        setCartItems(updatedItems)
    }

    return(
        <CartItemContainer>

            <CartItemImage>
                <img src={photo} alt="imagem do produto"/>
            </CartItemImage>

            <CartItemContent>
                <h3>{name}</h3>
                <p>{formatCurrency(parseInt(price), 'BRL')}</p>

                <button 
                    type="button"
                    onClick={ handleRemoveItem }
                >
                    <BsCartDashFill />
                </button>   
            </CartItemContent>
        </CartItemContainer>

        
    )
}

CartItem.propTypes = {
    data: propTypes.shape({}),
}.isRequired