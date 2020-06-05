import React from 'react';
import './Card.scss';
import { AiTwotoneStar } from 'react-icons/ai';


const Card = (props) => {
    console.log(props);

    const { id, title, address, rent, rating, Image } = props.entertainment;
    return (
        <div className="col-md-2">
            <div className="cardStyle">
                <img src={Image} alt={title} />
                <div className="cardText">
                    <small className="address">{address}</small>
                    <h6>{title}</h6>
                    <p>${rent} per person</p>
                    <small><span className="rating"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /> </span>{rating}</small>
                </div>

            </div>
        </div>
    );
};

export default Card;