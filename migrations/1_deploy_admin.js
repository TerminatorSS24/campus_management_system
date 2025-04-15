const CampusAdmin = artifacts.require("CampusAdmin");

module.exports = function (deployer) {
  deployer.deploy(CampusAdmin);
};
