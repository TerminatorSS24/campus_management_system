import { useState, useEffect } from 'react';
import useWeb3 from './useWeb3';
import BookingABI from '../abis/RoomBookingNFT.json';

const CONTRACT_ADDRESS = '0xYourBookingContractAddress';

const useBooking = () => {
  const { web3, account } = useWeb3();
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (web3) {
      const instance = new web3.eth.Contract(BookingABI, CONTRACT_ADDRESS);
      setContract(instance);
    }
  }, [web3]);

  const bookRoom = async (roomId, timestamp) => {
    await contract.methods.bookRoom(roomId, timestamp).send({ from: account });
  };

  return { bookRoom };
};

export default useBooking;
