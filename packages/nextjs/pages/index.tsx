import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
// import { type } from "os";
import ReactMarkdown from "react-markdown";
import { parseEther } from "viem";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

//定义一个新的数据类型来记录后端返回的数据
export type resultByDataset = {
  dataset_id: string;
  results: search_result[];
};
//定义一个数据类型来记录每个搜索结果
export type search_result = {
  id: string;
  data: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  metadata: {};
};

const ETHSpace: NextPage = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  useEffect(() => {
    // Request access to MetaMask
    const requestAccounts = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setCurrentAccount(accounts[0]); // Set the first account as the current account
        } catch (error) {
          console.error("Error accessing MetaMask accounts", error);
        }
      }
    };
    requestAccounts();
  }, []);

  const [assetNum, setAssetNum] = useState(0);
  const [safeTransferFromInput, setSafeTransferFromInput] = useState<{
    from: string;
    to: string;
    asset_id: number;
    amount: string;
  }>({
    from: "",
    to: "",
    asset_id: 0,
    amount: "",
  });
  const { data: totalAsset } = useScaffoldContractRead({
    contractName: "bodhi",
    functionName: "assetIndex",
    args: [],
  });

  useEffect(() => {
    // Validate and convert totalAsset before setting it
    if (totalAsset !== undefined) {
      // Convert totalAsset to a number if it's not already
      const num = typeof totalAsset === "number" ? totalAsset : parseInt(totalAsset.toString(), 10);
      setAssetNum(num);
    }
  }, [totalAsset]);

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "bodhi",
    functionName: "safeTransferFrom",
    args: [
      currentAccount,
      safeTransferFromInput.to,
      safeTransferFromInput.asset_id,
      parseEther(safeTransferFromInput.amount),
      "0x0",
    ],
    value: parseEther("0"),
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    const asset_id = queryParameters.get("asset_id");
    const amount = queryParameters.get("amount");
    const to = queryParameters.get("to");

    // Create a new state object based on the existing state and any new query parameters
    const newState = {
      ...safeTransferFromInput,
      asset_id: asset_id !== null ? parseInt(asset_id, 10) : safeTransferFromInput.asset_id,
      amount: amount !== null ? amount : safeTransferFromInput.amount,
      to: to !== null ? to : safeTransferFromInput.to,
    };

    // Set the new state
    setSafeTransferFromInput(newState);
  }, []);

  return (
    <div className="grid lg:grid-cols-1 flex-grow">
      <div className="hero min-h-screen bg-base-200 bg-gradient-to-r from-green-500 to-blue-500 flex flex-col justify-center items-center">
        <div className="mb-4">
          {" "}
          {/* Add margin-bottom to create space between the number and the button */}
          <p className="text-2xl font-bold">Bodhi Shares Transfer</p>{" "}
        </div>
        <input
          placeholder="To Address"
          className="mt-8 p-4 input input-bordered input-primary w-1/3"
          onChange={e => setSafeTransferFromInput({ ...safeTransferFromInput, to: e.target.value })}
          value={safeTransferFromInput.to}
        />
        <br></br>
        <input
          placeholder="Asset ID"
          className="mt-8 p-4 input input-bordered input-primary w-1/3"
          onChange={e => setSafeTransferFromInput({ ...safeTransferFromInput, asset_id: e.target.value })}
          value={safeTransferFromInput.asset_id}
        />
        <br></br>
        <div className="mt-8 flex items-center">
          <input
            placeholder="Amount"
            className="p-4 input input-bordered input-primary w-2/3" // Updated width to two-thirds
            onChange={e => setSafeTransferFromInput({ ...safeTransferFromInput, amount: e.target.value })}
            value={safeTransferFromInput.amount}
          />
          <p className="ml-2"><b>Shares</b></p>
        </div>
        <br></br>
        <div>
          <button
            className="btn join-item"
            onClick={() => {
              writeAsync();
            }}
          >
            💝 Transfer Assets 💝
          </button>
        </div>
        <br></br>
        <a href="https://bodhi.wtf/13773" target="_blank" rel="noreferrer">
          <button className="btn join-item">😊 Support Bodhi-Bodhi! 😊</button>
        </a>
        <br></br>
        <a href="https://twitter.com/0xleeduckgo" target="_blank" rel="noreferrer">
          <button className="btn join-item">❤️ Follow my twitter! ❤️</button>
        </a>
      </div>
    </div>
  );
};

export default ETHSpace;
