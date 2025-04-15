const LostAndFound = artifacts.require("LostAndFound");

contract("LostAndFound", ([admin, student]) => {
  let lf;

  beforeEach(async () => {
    lf = await LostAndFound.new({ from: admin });
  });

  it("should let users report found items", async () => {
    await lf.reportItem("Water Bottle", "ipfs://bottle_img", { from: student });
    const item = await lf.items(0);
    assert.equal(item.description, "Water Bottle");
  });
});
