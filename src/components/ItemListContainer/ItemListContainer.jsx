import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
     
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    console.log(products)

    return (
        <div>
            <h2 className="TitleContainer">NUESTROS PRODUCTOS</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer