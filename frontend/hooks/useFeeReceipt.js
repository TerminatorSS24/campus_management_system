import { useState, useEffect } from 'react';
import useWeb3 from './useWeb3';
import FeeReceiptABI from '../abis/FeeReceiptSBT.json';

const CONTRACT_ADDRESS = '0xYourFeeReceiptAddress';

const useFeeReceipt = () => {
  const { web3, account } = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      const instance = new web3.eth.Contract(FeeReceiptABI, CONTRACT_ADDRESS);
      setContract(instance);
    }
  }, [web3]);

  const getReceipts = async () => {
    return await contract.methods.getReceipts(account).call();
  };

  return { getReceipts };
};

export default useFeeReceipt;
