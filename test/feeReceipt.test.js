const FeeReceiptSBT = artifacts.require("FeeReceiptSBT");

contract("FeeReceiptSBT", ([admin, student]) => {
  let fee;

  beforeEach(async () => {
    fee = await FeeReceiptSBT.new({ from: admin });
  });

  it("should issue a fee receipt SBT", async () => {
    await fee.issueReceipt(student, "ipfs://receipt123", { from: admin });
    const uri = await fee.tokenURI(0);
    assert.equal(uri, "ipfs://receipt123");
  });
});
