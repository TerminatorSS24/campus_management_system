const LostAndFound = artifacts.require("LostAndFound");
const CampusAdmin = artifacts.require("CampusAdmin");

module.exports = async function (deployer) {
  const adminInstance = await CampusAdmin.deployed();
  await deployer.deploy(LostAndFound, adminInstance.address);
};
