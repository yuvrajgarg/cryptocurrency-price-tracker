import './App.css';
import React , {useState , useEffect} from 'react' ;
import axios from 'axios';
import Title_Bar from './Title_Bar' ;
import Coin from './Coin' ;

function App() { 
  const [coins,setCoins] = useState([]) ;
  const [search, setSearch] = useState('') ;

  useEffect(()=>
  {axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=130&page=1&sparkline=false')  
    .then(res => {
      setCoins(res.data) ;
    })
    .catch((error)=>alert("error") )
  },[]) ;


  const changeSearch = e => {
      setSearch(e.target.value) ; 
  };
//arrow function mei I used {},I was stuck for many hours on this.
  const filteredCoins = coins.filter( coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  ) ;
  return (
    <div className="App">
      <div className = "header" >
        <div className = "header_text" ></div>
            <h1>
                Hello there! 
            </h1>
        <div className = "header_searchBox" >
            <form >
                <input type = "text"  className = "header_searchBox_input" placeholder = "Search your coin" onChange = {changeSearch} >
                </input>
            </form>
        </div>
      </div>
      < Title_Bar />
      {filteredCoins.map ( coin => {
        return(
          
          <Coin 
            key = {coin.id}
            image = {coin.image}
            symbol = {coin.symbol} 
            name = {coin.name}
            price = {coin.current_price} 
            price_change = {coin.price_change_percentage_24h}
            market_cap =  {coin.market_cap} 
            market_cap_change = {coin.market_cap_change_percentage_24h}
          />
        )
      } )}
    </div>
  );
}

export default App;