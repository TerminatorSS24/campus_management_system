const CertificateVault = artifacts.require("CertificateVault");
const CampusAdmin = artifacts.require("CampusAdmin");

module.exports = async function (deployer) {
  const adminInstance = await CampusAdmin.deployed();
  await deployer.deploy(CertificateVault, adminInstance.address);
};
