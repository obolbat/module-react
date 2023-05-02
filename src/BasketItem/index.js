import React from "react";
import './style.css';

function BasketItem(props) {
    return (
        <div className="basket-item">
            <img className="basket-preview" src={props.productPreview}/>
            <h2 className="basket-title">{props.productTitle}</h2>
            <div className="basket-footer">
                <span className="basket-price">{formatPrice(props.price)}</span>
                <button className="basket-cart_button">x</button>
            </div>
        </div>
    )
}

function formatPrice(price) {
    if (!price) {
        return '';
    }

    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

export  default BasketItem;