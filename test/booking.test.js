const RoomBookingNFT = artifacts.require("RoomBookingNFT");

contract("RoomBookingNFT", ([admin, user]) => {
  let booking;

  beforeEach(async () => {
    booking = await RoomBookingNFT.new({ from: admin });
  });

  it("should allow admin to mint room NFT", async () => {
    const uri = "ipfs://room_101_slot_1";
    await booking.mintBooking(user, uri, { from: admin });
    const owner = await booking.ownerOf(0);
    assert.equal(owner, user);
  });

  it("should prevent unauthorized minting", async () => {
    try {
      await booking.mintBooking(user, "ipfs://invalid", { from: user });
      assert.fail();
    } catch (err) {
      assert(err.message.includes("Only admin"), "Expected only admin error");
    }
  });
});
