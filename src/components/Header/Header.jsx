import CartButton from "../CartButton/CartButton.jsx";
import { Container, Head, Titulo } from "../../styles/styles";

export default function Header() {
    return(
            <Container>
                <Head>
                    <Titulo>MKS<span>Sistemas</span></Titulo>
                    <CartButton />
                </Head>
            </Container>
                
    )
}