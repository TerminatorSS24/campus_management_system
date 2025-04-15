const RoomBookingNFT = artifacts.require("RoomBookingNFT");
const CampusAdmin = artifacts.require("CampusAdmin");

module.exports = async function (deployer) {
  const adminInstance = await CampusAdmin.deployed();
  await deployer.deploy(RoomBookingNFT, adminInstance.address);
};
