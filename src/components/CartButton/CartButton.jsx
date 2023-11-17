import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../../styles/styles";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext.jsx";

export default function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

    return(
        <Button onClick={() => setIsCartVisible(!isCartVisible)}>
            <AiOutlineShoppingCart size={25}/>
            <span>{cartItems.length}</span>
        </Button>
        
    )
}