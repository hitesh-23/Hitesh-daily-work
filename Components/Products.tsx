import React from 'react'
import Product from './Product'
    

type props = {
    data : {
        id:number;
        itemBrand : string;
        itemTitle : string;
        itemUrl : string;
        itemPrice : number;
        deliveryStatus : string;}[];
        updateCartItems(id:number) : void;
}  


    const Products = ({data, updateCartItems}: props) => {
        return (
            <section>
            <div className="items">
                <Product data={data} updateCartItems={updateCartItems}/>
            </div>

            <div className="footer">

            </div>
            </section>
        )
    }
    
    export default Products
    