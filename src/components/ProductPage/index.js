import './style.css';
import Product from '../ProductCard';
import React from "react";
import productsList from '../../bd/products'

function Products() {
    return (
        <div className="products">
            {
                productsList.map((item, key) => {
                return(
                    <Product
                        key={key}
                        productPreview={item.productPreview}
                        productTitle={item.productTitle}
                        description={item.description}
                        price={item.price}
                        weight={item.weight}
                    />
                )
            })
            }
        </div>
    )
}

export  default Products;