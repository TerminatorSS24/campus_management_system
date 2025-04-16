import { useState, useEffect } from 'react';
import useWeb3 from './useWeb3';
import CertificateABI from '../abis/CertificateVault.json';

const CONTRACT_ADDRESS = '0xYourCertificateVaultAddress';

const useCertificateVault = () => {
  const { web3, account } = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      const instance = new web3.eth.Contract(CertificateABI, CONTRACT_ADDRESS);
      setContract(instance);
    }
  }, [web3]);

  const getCertificates = async () => {
    return await contract.methods.getCertificates(account).call();
  };

  return { getCertificates };
};

export default useCertificateVault;
