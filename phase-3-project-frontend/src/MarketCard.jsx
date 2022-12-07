import React from "react"
function MarketCard ({listing}) {

    return (
        <div className="display">
            <div className="market-card">
                <img src={listing.img_url} alt={listing.title}/>
                <h4 className="text">{listing.price}</h4>
                <h5 className="text">{listing.title}</h5>
                <textarea rows="10" cols="50">{listing.description}</textarea>
            </div>
        </div>
    )
}

export default MarketCard
