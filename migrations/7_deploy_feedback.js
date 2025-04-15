const FeedbackCollector = artifacts.require("FeedbackCollector");
const CampusAdmin = artifacts.require("CampusAdmin");

module.exports = async function (deployer) {
  const adminInstance = await CampusAdmin.deployed();
  await deployer.deploy(FeedbackCollector, adminInstance.address);
};
