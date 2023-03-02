import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct]  = useState({})

    const { productId } = useParams()

    useEffect(()=> {
          getProduct(productId).then(product => {
            setProduct(product)
          })
    }, [])

    console.log(product)

    return (
        <div>
          <div>
            <img src={product.img} alt="" className="ProductImg"/>
            <h2>{product.name}</h2>
            <p className="Description">{product.description}</p>
            <span className="PriceArs">{product.coin}</span>
            <p className="PriceItemDetail">{product.price}</p>
            <button className="ButtomDetail">Agregar al carrito</button>
           </div>
        </div>
        
    )
}

export default ItemDetailContainer