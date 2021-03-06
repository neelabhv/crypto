import React, { Fragment } from "react";
import './style.css';

export default function Cards({props}) {

    const {name,symbol,image,current_price,last_updated,total_volume,circulating_supply}=props;

  return (
    <Fragment>
      <div id="each-card">
        <img src={image} alt="image cannot be loaded"></img>
        <div id="coin-details">
        <div className="label"><div className="label-heading">Name : </div>{name}</div>
        <div className="label"><div className="label-heading">Symbol : </div>{symbol}</div>
        <div className="label"><div className="label-heading">Current Price : </div>{current_price} INR</div>
        <div className="label"><div className="label-heading">Last Updated : </div>{last_updated}</div>
        <div className="label"><div className="label-heading">Total Volume : </div>{total_volume}</div>
        <div className="label"><div className="label-heading">Circulating Supply : </div>{circulating_supply}</div>
        </div>
      </div>
    </Fragment>


  );
}
