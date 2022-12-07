import React, {useState} from "react"
import MarketCard from "./MarketCard"

function MarketMain ({listings}) {

    const [sort, setSort] = useState("all")
    const [buttonData, setButtonData] = useState({
        outfits: false,
        toys: false,
        sports: false,
        furniture: false,
        pet: false,
        garden: false
    })

    const filteredListings = listings.filter((listing)=>{
        if (sort === "all") {
            return true;
        }
        else {
            return sort === listing.category.toLowerCase()
        }
    })

    const listingsArray = listings.map((listing)=>{
        return (<MarketCard listing={listing} />)
    })

    return (
        <div id="marketplace">
            <div className="header">
                <h1 className="title">Market</h1>
                <div>
                    <input className="input"type="text" placeholder="Search Treasures..."/>
                </div>
                <button className="cat-item" value="outfits">Outfits</button>
                <button className="cat-item" value="toys">Toys & Games</button>
                <button className="cat-item" value="sports">Sports</button>
                <button className="cat-item" value="furniture">Furniture</button>
                <button className="cat-item" value="pet">Pet Supplies</button>
                <button className="cat-item" value="garden">Garden & Outdoor</button>
            </div>
            <div className="market-container">
                {listingsArray}
            </div>
        </div>
    )


}

export default MarketMain
