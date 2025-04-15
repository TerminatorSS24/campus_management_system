const CertificateVault = artifacts.require("CertificateVault");

contract("CertificateVault", ([admin, student]) => {
  let vault;

  beforeEach(async () => {
    vault = await CertificateVault.new({ from: admin });
  });

  it("should mint a certificate SBT", async () => {
    await vault.issueCertificate(student, "ipfs://cert_event1", { from: admin });
    const uri = await vault.tokenURI(0);
    assert.equal(uri, "ipfs://cert_event1");
  });
});
