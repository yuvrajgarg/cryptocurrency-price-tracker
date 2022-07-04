import React, { useState } from 'react'

function Header() {
    // const [search, setSearch] = useState("") ;
    // const changeSearch = e => {
    //     setSearch(e.target.value) ;
    // };
    return (
        <div className = "header" >
            <div className = "header_text" ></div>
                <h1>
                    Hello Crypto PEEP! 
                </h1>
            {/* <div className = "header_searchBox" >
                <form >
                    <input type = "text"  className = "header_searchBox_input" placeholder = "Search" onChange = {changeSearch} >
                    </input>
                </form>
            </div> */}
        </div>
    )
}

export default Header;
