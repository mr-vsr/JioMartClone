import React, { useEffect, useState } from 'react'
import "../Cart/CartItem.css"
import { AddSubstact } from './AddSubstact'
export const CartItem = ({image,name,price}) => {
    
  return (
    <div className='CartItem'>
        <div>
            <div>
                <img src={image} alt="image1" />
            </div>
        </div>
        <div>
            <div>
                {name}
            </div>
            <div>
                <span>₹129.00</span>
                <span>₹200.00</span>
                <span>You Save ₹71.00</span>
            </div>
            <div>
                <span>Sold By </span>
                <span>Reliance Retail</span>
            </div>
            <div>
                <div>SAVE FOR LATER</div>
                <AddSubstact/>
            </div>
        </div>
    </div>
  )
}
