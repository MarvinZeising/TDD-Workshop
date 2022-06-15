import React from 'react'
import {Product} from "../model/Product";
import {ShoppingCart} from "../model/ShoppingCart";
import {ProductUnit} from "../model/ProductUnit";

const Catalogue = () => {
    const products: Product[] = []
    const cart: ShoppingCart = new ShoppingCart()

    const addToCart= (product: Product) => {
        cart.addItem(product, 1)
    }

    const generateReceipt = () => {
    }

    return (
        <>
        <ul>
            {products.map(product => (
                <li>
                    <p>{product.name}</p>
                    <button onClick={addToCart}>Add to cart</button>
                </li>
            ))}
        </ul>

            <div>
                <button onClick={generateReceipt}>Buy!</button>
            </div>
        </>
    )
}

export default Catalogue
