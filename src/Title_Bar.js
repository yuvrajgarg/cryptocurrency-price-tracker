import React from 'react'
import './Title_Bar.css' ;

function Title_Bar() {
    return (
        <div className = " title_bar " >
            {/* <div>rank</div> */}
            {/* <div class_name = " title_bar_div">Coin</div> */}

            <div class_name = " title_bar_div">Symbol</div>
            <div class_name = " title_bar_div">Name</div>
            <div class_name = " title_bar_div">Price</div>
            <div class_name = " title_bar_div">Price Change %</div>
            {/* <div>Volume</div> */}
            <div class_name = " title_bar_div">Market capital</div>
            <div class_name = " title_bar_div">Change %</div>
        </div>
    )
}

export default Title_Bar ; 
