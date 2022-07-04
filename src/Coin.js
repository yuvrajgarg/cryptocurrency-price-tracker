import React from 'react' ; 
import './Coin.css' ; 
function Coin({image,symbol,name,price,price_change,market_cap,market_cap_change}) {
    return ( 
        <div className="coin" > 
            {/* <button onClick={addToFav()} >ADD TO FAV</button>  */}
            <div  className = "coin_img_symbol" > 
                    <img className = " coin_img " src={image} alt="hatt be!" ></img> 
                    <p>{symbol}</p> 
            </div> 
            <div  className = "coin_name" > 
                <p>{name}</p> 
            </div> 
            <div className = " coin_price_info "  > 
                <p>Rs.{price.toLocaleString()}</p> 
                {price_change < 0 ? 
                    <p className = "red" >{price_change.toFixed(2)}%</p> 
                    : 
                    < p className = "green" >{price_change.toFixed(2)}% 
                    </p> 
                } 
                 
            </div> 
            <div className = " coin_marketCap_info "  > 
                <p>Rs.{market_cap.toLocaleString()}</p> 
                {market_cap_change < 0 ?  
                    <p className = "red" >{market_cap_change.toFixed(2)}%</p> 
                    : 
                    < p className = "green" >+{market_cap_change.toFixed(2)}% 
                    </p> 
                } 
            </div> 
        </div> 
    ) 
} 
 
export default Coin ; 