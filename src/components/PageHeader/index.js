import './style.css'
import basketImg from "../../assets/basket.svg";

function PageHeader() {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const cnt = currentCart.length;
    const price = currentCart.reduce((value, item) => {
        return +item.price + value;
    }, 0);

    return (
        <div className="main-header">
            <div className="header">
                <h1 className="title">Наша продукция</h1>
                <div className="full-basket">
                    <div className="basket">{declOfNum(cnt, ['товар', 'товара', 'товаров'])}<br/> на сумму {formatPrice(price)}</div>
                    <a href="/cart" className="basket-radius"><img className="image-bas" src={basketImg}/></a>
                 </div>
            </div>
        </div>
    )
}

function formatPrice(price) {
    return parseFloat(price).toLocaleString('ru') + ' ₽'
}

function declOfNum(number, words) {
    return number + ' ' + words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

export default PageHeader;