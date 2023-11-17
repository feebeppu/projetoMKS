import axios from "axios"
import { useQuery } from "react-query"
import ProductCard from "../ProductCard/ProductCard.jsx"
import { useRef } from "react"

import { Product } from "../../styles/styles"
import Skeleton from "../Skeleton/Skeleton"

export default function Products() {

    const width = useRef(window.innerWidth/8).current

    const { data, isLoading, error } = useQuery("products", () => {
        return axios
        .get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC")
        .then((response) => response.data)
    }, 
        {
            retry: 5,
            refetchOnWindowFocus: true,
            refetchInterval: 5000,
        }
    )

    if(error) {
        return <div>Algo deu errado!</div>
    }

    return(
        ( isLoading && 
            <Product>
                {
                    [1,2,3,4,5,6,7,8].map((product) => (
                        <Skeleton key={product} width={width} height={300} />
                ))}
            </Product> 
        ) || (
            <Product>
                {
                    data.products.map((product) => (
                        <ProductCard key={product.id} data={product}/>
                ))}
            </Product>
        ) 
    )
}