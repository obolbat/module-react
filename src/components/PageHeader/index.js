import './style.css';
import React from "react";
import {Link} from 'react-router-dom';
import SmallBasket from "../SmallBasket";
import backImg from "../../assets/img_back.svg";

function PageHeader({title, needCart, needBack}) {

    return (
        <div className="main-header">
            <div className="header">
                {needBack && (<Link to="/module-react" className="back-button"><img className="image-bas" src={backImg}/></Link>)}
                {title && (<h1 className="title">{title}</h1>)}
                {needCart && (<SmallBasket/>)}
            </div>
        </div>
    )
}

export default PageHeader;