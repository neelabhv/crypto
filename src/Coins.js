import React, { Fragment, Suspense, useEffect, useState } from "react";
import axios from "axios";
import Loading from './Loading';
// import Cards from './Cards';
import './style.css';
const Cards = React.lazy(()=>import('./Cards'));

// const BASE_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false";

export default function Coins() {
  const [coins, setCoins] = useState([]);
  const [searchcoin, setSearchcoin] = useState(null);
  const [filteredCoins,setFilteredcoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false"
      )
      .then((response) => {
        // console.log(response);
        setCoins(response.data);
        setFilteredcoins(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  
  useEffect(()=>{
    // console.log(searchcoin);
    if(searchcoin !== ' '){
      setFilteredcoins(coins.filter( coin => coin.name.toLowerCase().includes(searchcoin.toLowerCase())));
    }
    // console.log(filteredCoins);
  },[searchcoin])


  return (
    <Fragment>
      <div id="parent-div">   
        <nav>
          <div id="title">
          Cryptocurrency Tracker
          </div>
          <div id="search">
            <input
              type="text"
              id="coin"
              placeholder="Enter Cryptocurrency"
              onChange={(e) => setSearchcoin(e.target.value)}
            ></input>
          </div>
        </nav>
        <div id="coin-card">
          <Suspense fallback={<Loading/>}>
          {filteredCoins.map(coin=><Cards key={coin.id} props={coin}/>)}
          </Suspense>
          {/* <Cards props={filteredCoins}/> */}
        </div>
      </div>
    </Fragment>
  );
}
