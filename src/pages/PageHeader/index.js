import './style.css'
import basketImg from "../../assets/basket.svg";
import backImg from "../../assets/img_back.svg";

function PageHeader() {
    return (
        <div className="main-header">
            <div className="header">
                <button className="back-button"><img className="image-bas" src={backImg}/></button>
                <h1 className="title">Корзина с выбранными товарами</h1>
                {/*<div className="full-basket">*/}
                    {/*<div className="basket">3 товара <br/> на сумму 3 500 ₽</div>*/}
                    {/*<button className="basket-radius"><img className="image-bas" src={basketImg}/></button>*/}
                 {/*</div>*/}
            </div>
        </div>
    )
}

export  default PageHeader;