import React, {useContext } from 'react'


type props = {
    data : {
        id:number;
        itemBrand : string;
        itemTitle : string;
        itemUrl : string;
        itemPrice : number;
        deliveryStatus : string;}[],
        updateCartItems(id:number) : void
}



const Product = ({data, updateCartItems} : props)=> {
    return (
        <section>
            {data.map((item)=> {
                const {itemBrand, itemTitle, itemUrl, itemPrice, deliveryStatus, id} = item;
            

        return <div className="item" >
            <img src={itemUrl} alt=""></img>
            <h4>{itemBrand}</h4>
            <h2>{itemTitle}</h2>
            <h4>INR {itemPrice} Rs</h4>
            <h5>{deliveryStatus}</h5>
            <div className="btnctn">
           
            <button className="cart" onClick={()=>updateCartItems(id)}>Add to cart</button>
            
            </div>
        </div>
        })
        }
        </section>
        
    )
}


export default Product;