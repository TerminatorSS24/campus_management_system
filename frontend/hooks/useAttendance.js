import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import AttendanceSBT from '../abis/AttendanceSBT.json';
import useWeb3 from './useWeb3';

const CONTRACT_ADDRESS = '0xYourContractAddress';

export default function useAttendance() {
  const { signer } = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (signer) {
      const attendanceContract = new ethers.Contract(CONTRACT_ADDRESS, AttendanceSBT.abi, signer);
      setContract(attendanceContract);
    }
  }, [signer]);

  return contract;
}
