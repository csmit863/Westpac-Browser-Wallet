import { useState } from "react"
import { Button } from '@westpac/ui/button';

function IndexPopup() {
  const [data, setData] = useState("")
  console.log(data);

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        Westpac Browser Wallet
      </h2>
      <h3>Unlock Wallet</h3>
      <section>
        <div className="space-x-4 mb-2">
          <Button look="primary">Pay here</Button>
        </div>
      </section>
      
      <input onChange={(e) => setData(e.target.value)} value={data} />
      
    </div>
  )
}

export default IndexPopup
