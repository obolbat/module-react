import './style.css';
import Product from '../Product';
import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

function Products() {
    return (
        <div className="products">
            <Product
                productPreview={img1}
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />
            <Product
                productPreview={img2}
                productTitle="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                price="1600"
                weight={750}
            />
            <Product
                productPreview={img3}
                productTitle="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                price="1820"
                measure="шт."
                weight={7}
            />
            <Product
                productPreview={img1}
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />
            <Product
                productPreview={img1}
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />
            <Product
                productPreview={img2}
                productTitle="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                price="1600"
                weight={750}
            />
            <Product
                productPreview={img2}
                productTitle="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                price="1600"
                weight={750}
            />
            <Product
                productPreview={img3}
                productTitle="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                price="1820"
                measure="шт."
                weight={7}
            />
            <Product
                productPreview={img1}
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />

        </div>
    )
}

export  default Products;