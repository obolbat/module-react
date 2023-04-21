import './style.css'

function Product(props) {
    return (
        <div className="product-item">
            <img className="product-preview" src={props.productPreview}/>
            <h2 className="product-title">{props.productTitle}</h2>
            <div className="product-description">{props.description}</div>
            <div className="broduct-footer">
                <div>
                    <span className="product-price">{formatPrice(props.price)}</span>
                    {props.price && props.weight ? ' / ' : ''}
                    <span className="product-weight">{formatWeight(props.weight, props.measure)}</span>
                </div>
                <button className="product-cart_button">+</button>
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

function formatWeight(weight, measure = 'г.') {
    if (!weight) {
        return '';
    }

    return parseFloat(weight).toLocaleString('ru') + ' ' + measure;
}

export  default Product;