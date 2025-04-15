const AttendanceSBT = artifacts.require("AttendanceSBT");
const CampusAdmin = artifacts.require("CampusAdmin");

module.exports = async function (deployer) {
  const adminInstance = await CampusAdmin.deployed();
  await deployer.deploy(AttendanceSBT, adminInstance.address);
};
