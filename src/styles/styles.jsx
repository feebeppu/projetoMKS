import styled, { keyframes } from 'styled-components'

// Estilos Header

export const Container = styled.header`
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    background-color: #0F52BA;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
`

export const Head = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 70px;
`

export const Titulo = styled.h1`
    font-size: 40px;
    font-weight: 500;
    color: #FFFFFF;
    margin-right: 100px;

    span {
        font-size: 20px;
        font-weight: 300;
        margin-left: 10px;
    }
`

export const Button = styled.button`
    width: 90px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    position: relative;

    span {
        background-color: red;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        right: 10px;
        color: white;
        font-size: 11px;
        font-weight: 600;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

// Estilos Products

export const Product = styled.section`
    background-color: #E5E5E5;
    padding: 120px 300px;   
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`

export const CardSection = styled.section`
    width: 100%;
    max-width: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: 0 auto;
    position: relative;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 6px 6px 6px #bbb;

    img {
        height: 60%;
    }

    article {
        font-size: 12px;
        color: #2C2C2C;
    }
`
export const CardDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;

    p {
        border: 1px solid #373737;
        padding: 5px;
        border-radius: 5px;
        background-color: #373737;
        color: #FFFFFF;
        font-weight: 700;
    }
`
export const CardBtn = styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #0F52BA;
    border-radius: 0 0 20px 20px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 14px;
`

// Estilos Carrinhos

export const CartContainer = styled.section`
    width: 100%;
    max-width: 500px;
    background-color: #0F52BA;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 50px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translate(110%, 0);
    transition: all 400ms ease;

    h1 {
        color: #FFF;
        padding-right: 200px;
    }
`

export const CartItems = styled.div`
    flex-grow: 1;
    overflow: auto;
`

export const CartResume = styled.div`
    font-size: 28px;
    font-weight: 700;
    color: #FFF;
`

export const CartItemContainer = styled.section`
    width: 100%;
    display: flex;  
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    margin-top: 30px;
    padding: 10px;
    border-radius: 10px;
    position: relative;
`

export const CartItemImage = styled.div`
    img {
        width: 70px;
        margin-right: 10px;
    }
`

export const CartItemContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-size: 14px;
        font-weight: 400;
    }

    p {
        font-size: 14px;
        font-weight: 700;
        margin-left: 140px;
    }

    button {
        position: absolute;
        top: -8px;
        right: 0px;
        color: #FFF;
        background-color: #d83232;
        padding: 5px;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 15px;
    }
`

export const CartItemActive = styled.section`
    width: 100%;
    max-width: 500px;
    background-color: #0F52BA;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 50px 50px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translate(0, 0);

    h1 {
        color: #FFF;
        padding-right: 200px;
    }
`

// Estilos Footer 

export const FooterContainer = styled.div`
    padding: 20px;
    background-color: #EEEEEE;
    text-align: center;
`
const shimmer = keyframes`
    0%{
        background-position: 0% 0%;
    }

    100%{
        background-position: -135% 0%;
    }
`

export const Load = styled.div`
    background-image: linear-gradient(
        -90deg,
        #000000 0%,
        #EEEEEE 50%,
        #000000 100% 
    );
    background-size: 400% 400%;
    animation: ${shimmer} 1.2s ease-in-out infinite;
`

