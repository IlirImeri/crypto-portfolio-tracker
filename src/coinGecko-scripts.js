import axios from 'axios';

export const pingCoinGecko = async () => {
  let ping = await axios.get('https://api.coingecko.com/api/v3/ping');
}

export async function getCoinsList(){
  let coinList =[]; 
  await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(coins =>{
      coinList.push(coins.data);
  });
  return coinList;  
}

//export const getCoinsList = async () => {
//  const coinList = await axios.get('https://api.coingecko.com/api/v3/coins/list');
//}
