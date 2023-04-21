import './style.css';
import Product from '../Product';
import React from "react";

function Products() {
    return (
        <div className="products">
            <Product
                productPreview='../assets/1.png'
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />
            <Product
                productPreview='../assets/2.png'
                productTitle="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                price="1600"
                weight={750}
            />
            <Product
                productPreview='../assets/3.png'
                productTitle="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                price="1820"
                measure="шт."
                weight={7}
            />
            <Product
                productPreview='../assets/2.png'
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />
            <Product
                productPreview='../assets/2.png'
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />
            <Product
                productPreview='../assets/2.png'
                productTitle="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                price="1600"
                weight={750}
            />
            <Product
                productPreview='../assets/2.png'
                productTitle="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых"
                price="1600"
                weight={750}
            />
            <Product
                productPreview='../assets/3.png'
                productTitle="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                price="1820"
                measure="шт."
                weight={7}
            />
            <Product
                productPreview='../assets/2.png'
                productTitle="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры"
                price="2700"
                weight={500}
            />

        </div>
    )
}

export  default Products;