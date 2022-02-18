import { React, useState } from "react"
import "./../style/dashboard.css" 
import { getCoinsList } from "../coinGecko-scripts";
import { pingCoinGecko } from "../coinGecko-scripts";

export const Dashboard = () => {
  const [visible, setVisibility] = useState(false);
  const [coins, setCoinsList] = useState([]);

  
  async function getCoins(){
    let items = [];
    items.push((await getCoinsList()));
    console.log(items);
    setCoinsList(items);
  }

  // function coinList() {
  //   for (var i=0,ì; i<coins.length; i++) {
  //     <option>
  //       {coins[i].name}
  //     </option>
  //   }
  // }

  return (
    <div className="popup-box">
        <button onClick={ () => setVisibility(true)}>Add</button>
        <div style={ visible ? { display : 'block' } : { display: 'none' } }>
          <div className="container">
            <form>
              <select name = "dropdown">
                <option value = "taj" defaultValue={"Bitcoin"}>Bitcoin</option>
                <option value = "china">Etherium</option>
                <option value = "chirst">Cardano</option>
                <option value = "machu">Sushi Swap</option>
                <option value = "chichen">Gala</option>
                <option value = "colossem">Fantom</option>
                <option value = "petra">Siacoin</option>

                {coins.map(coin => 
                <option>
                  {console.log(coin.id)}
                </option>
                )}

              </select>
              <input type="number" placeholder="0.00"/>
          </form>
            <input type="date" name="date" id="bought-date" />
            <button onClick={ () => setVisibility(false)}>Close</button>
          </div>
        </div>
        <button onClick={getCoins}>Coins list</button>
    </div>
  )
}
