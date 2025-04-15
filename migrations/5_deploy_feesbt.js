const FeeReceiptSBT = artifacts.require("FeeReceiptSBT");
const CampusAdmin = artifacts.require("CampusAdmin");

module.exports = async function (deployer) {
  const adminInstance = await CampusAdmin.deployed();
  await deployer.deploy(FeeReceiptSBT, adminInstance.address);
};
