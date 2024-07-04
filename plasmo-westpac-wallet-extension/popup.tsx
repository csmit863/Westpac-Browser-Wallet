import { useState } from "react"
import { Button, Input } from '@westpac/ui';
import icon from './assets/icon.png';

function IndexPopup() {
  const [data, setData] = useState("")
  console.log(data);

  return (
    <div
      style={{
        margin:0,
        padding:8, 
        backgroundColor:"#DA1710"
        }}>
        <div>
          <img src={icon} width={'200px'} height={'200px'}/>
        </div>
      <h3>
        Westpac Browser Wallet
      </h3>
      <Input
          placeholder="Pin"
          type="password"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      {/*<input onChange={(e) => setData(e.target.value)} value={data} />*/}
      
    </div>
  )
}

export default IndexPopup
