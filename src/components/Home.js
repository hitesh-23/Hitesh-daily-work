import React from 'react'

function Home(props) {
    return (
        <div>
           
            
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home