import { useContext } from "react";
import { CartContainer, CartItemActive, CartItems, CartResume } from "../../styles/styles";
import CartItem from "../CartItem/CartItem.jsx";
import { AppContext } from "../../Context/AppContext.jsx";
import formatCurrency from "../../utils/formatCurrency";

export default function Cart() {

    const { cartItems, isCartVisible } = useContext(AppContext)
    
    const totalPrice = cartItems.reduce((acc, item) => {
        return parseInt(item.price) + acc
    },0)

    return(
        ( isCartVisible && 
            <CartItemActive >
                <h1>Carrinho de Compras</h1>
                <CartItems >
                    { cartItems.map((cartItem) => 
                        <CartItem key={cartItem.id} data={cartItem}/>
                    )}
                </CartItems> 
                    
                <CartResume>
                    Total: {formatCurrency(parseInt(totalPrice), "BRL")}
                </CartResume>
            </CartItemActive>
        ) || (
            <CartContainer>
                <h1>Carrinho de Compras</h1>
                <CartItems >
                    { cartItems.map((cartItem) => 
                        <CartItem key={cartItem.id} data={cartItem}/>
                    )}
                </CartItems> 
                    
                <CartResume>
                    Total: {formatCurrency(parseInt(totalPrice), "BRL")}
                </CartResume>
            </CartContainer>
        )
        
    )
}