import React from "react";

export default function Card({card, index, onClick}) {
    return (
        <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={()=>onClick(index)}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={card.image} alt="card front of an image"/>
                </div>
                <div className="card-back"></div>
            </div>
        </div>
    )

}