import React from 'react';
import {Link} from "react-router-dom";

export default function Home() {
  
  return (
    <div>
      <Link to="/customers">
        <div>Customer lists</div>
      </Link>
      <Link to="/mint-and-transfer">
        <div>Mint & Transfer NFT</div>
      </Link>
    </div>
  )
}
