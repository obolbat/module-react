import './style.css'
import React from "react";
import BasketItem from "../../components/BasketItem";
import BasketHeader from "../../components/BasketHeader";


function Basket() {
    const basketItemsList = JSON.parse(localStorage.getItem('cart')) || [];
    return (
        <>
            <BasketHeader/>
            <div className="basket-products">
                {basketItemsList.map((item, key) => {
                    return(
                        <BasketItem
                            key={key}
                            productPreview={item.productPreview}
                            productTitle={item.productTitle}
                            price={item.price}
                        />
                    )
                })}
            </div>
            <hr/>
            <div className="basket_footer">
                <div className="order-footer">Заказ на сумму</div>
                <div className="order-price">6220 ₽</div>
                <button className="order_button">Оформить заказ</button>
            </div>
        </>
    )
}

function formatPrice(price) {
    if (!price) {
        return '';
    }

    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

export default Basket;