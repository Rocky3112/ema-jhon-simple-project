import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemovefromCart}) => {
    const {img ,id, name, price, quantity}=product;
    return (
        <div className='review-item'>
            <img src={img} />
            <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p>Price: <span className='orange'>${price}</span></p>
                <p>Quantity: <span className='orange'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemovefromCart(id)} className='btn-delete'>
                <FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;