import { useState, useEffect } from 'react';
import useWeb3 from './useWeb3';
import AttendanceABI from '../abis/AttendanceSBT.json';

const CONTRACT_ADDRESS = '0xYourAttendanceContractAddress';

const useAttendance = () => {
  const { web3, account } = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      const instance = new web3.eth.Contract(AttendanceABI, CONTRACT_ADDRESS);
      setContract(instance);
    }
  }, [web3]);

  const markAttendance = async (eventId) => {
    await contract.methods.markAttendance(eventId).send({ from: account });
  };

  return { markAttendance };
};

export default useAttendance;
