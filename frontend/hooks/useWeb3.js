'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export default function useWeb3() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);

  // Connect to MetaMask wallet
  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('🦊 MetaMask not detected!');
      return;
    }

    try {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const newSigner = await newProvider.getSigner();
      const currentNetwork = await newProvider.getNetwork();

      setProvider(newProvider);
      setSigner(newSigner);
      setAccount(accounts[0]);
      setNetwork(currentNetwork);
    } catch (error) {
      console.error('Wallet connect error:', error);
    }
  };

  // Automatically update on account/network change
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', () => window.location.reload());
      window.ethereum.on('chainChanged', () => window.location.reload());
    }
  }, []);

  return { provider, signer, account, network, connectWallet };
}
  