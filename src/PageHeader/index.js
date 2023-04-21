import './style.css'

function PageHeader() {
    return (
        <div className="main-header">
            <div className="header">
                <h1 className="title">наша продукция</h1>
                <div className="full-basket">
                    <div className="basket">3 товара <br/> на сумму 3 500 ₽</div>
                        <button className="basket-radius"><img className="image-bas" src='../assets/vector.svg'/></button>

                 </div>
            </div>
        </div>
    )
}

export  default PageHeader;