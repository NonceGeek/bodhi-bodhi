import styles from '../../styles/Pages.module.css';
import { useState, useEffect } from "react";
export default function Index({ navigateToPage }) {
  // Awesome Bodhi Apps
  // Subscribe Author -> Bodhi RSS
  // Share as Iframe
  // Transfer!
  // See the Reveal Things
  // Tag Things

  function extractSubstring(url: string): string {
    // Define the delimiter or part of the URL where the number is located
    const delimiter = "https://bodhi.wtf/";
    
    // Use the split method to separate the URL into parts
    const parts = url.split(delimiter);

    // The number should be in the second part if the URL is well-formed
    if (parts.length > 1) {
        return parts[1];
    } else {
        // If the URL doesn't contain the expected pattern
        throw new Error("The URL does not contain the expected pattern.");
    }
}

  const [safeTransferFromInput, setSafeTransferFromInput] = useState<{
    from: string;
    to: string;
    asset_id: number;
    amount: number;
  }>({
    from: "",
    to: "0x73c7448760517E3E6e416b2c130E3c6dB2026A1d",
    asset_id: 0,
    amount: "1",
  });

  const openURL = () => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      const currentUrl = tabs[0]?.url; // Use optional chaining in case tabs[0] is undefined
      // setSafeTransferFromInput({ ...safeTransferFromInput, asset_id: extractSubstring(currentUrl) });

      window.open("https://bodhi-bodhi.vercel.app/?to=" + safeTransferFromInput.to + "&asset_id=" + extractSubstring(currentUrl) + "&amount=" + safeTransferFromInput.amount, '_blank');
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Bodhi Bodhi</h3>
        <hr></hr>
        <input
          placeholder="To Address"
          className="mt-8 p-4 input input-bordered input-primary w-1/3"
          onChange={e => setSafeTransferFromInput({ ...safeTransferFromInput, to: e.target.value })}
          value={safeTransferFromInput.to}
        />
        <br></br>
        {/* <input
          placeholder="Asset ID"
          className="mt-8 p-4 input input-bordered input-primary w-1/3"
          onChange={e => setSafeTransferFromInput({ ...safeTransferFromInput, asset_id: e.target.value })}
          value={safeTransferFromInput.asset_id}
        />
        <br></br> */}
        <input
            placeholder="Amount"
            className="mt-8 p-4 input input-bordered input-primary w-1/3"
            onChange={e => setSafeTransferFromInput({ ...safeTransferFromInput, amount: e.target.value })}
            value={safeTransferFromInput.amount}
        />
        
        <br></br>
        {/* <a href={"https://bodhi-bodhi.vercel.app/?to=" + safeTransferFromInput.to + "&asset_id=" + safeTransferFromInput.asset_id + "&amount=" + safeTransferFromInput.amount } target="_blank" rel="noreferrer"> */}
          <button onClick={openURL} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Transfer shares of this asset
          </button>
        {/* </a> */}
        <hr></hr>
        {/* <a href="https://projects.noncegeek.com/?tag=bodhi" target="_blank" rel="noreferrer">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tag this Asset
          </button>
        </a>
        <hr></hr> */}
        {/* <h3 className={styles.title}>Tag this asset</h3>
        <hr></hr> */}
        {/* <h3 className={styles.title}>Awesome Bodhi Apps</h3> */}
        <a href="https://projects.noncegeek.com/?tag=bodhi" target="_blank" rel="noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See Awesome Bodhi Apps
          </button>
        </a>
        {/* <p className={styles.description}>
          This is an example of a Browser Extension built with NEXT.JS. Please
          refer to the GitHub repo for running instructions and documentation
        </p> 
        
        <h1 className={styles.code}>Awesome Bodhi Apps</h1> 
        <p>{"[ - This is Index page content - ]"}</p>
        <p onClick={() => navigateToPage('new')}>{"Go to New Page >"}</p>*/}
      </main>
    </div>
  );
}
