'use client';

import React from 'react';
import useWeb3 from '../hooks/useWeb3';

export default function HomePage() {
  const { account, connectWallet, network } = useWeb3();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🏫 Smart Campus Dashboard</h1>

      {account ? (
        <div>
          <p className="text-green-600">✅ Connected as: {account}</p>
          <p className="text-gray-600">Network: {network?.name} (Chain ID: {network?.chainId})</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
