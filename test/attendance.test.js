const AttendanceSBT = artifacts.require("AttendanceSBT");

contract("AttendanceSBT", ([admin, student]) => {
  let attendance;

  beforeEach(async () => {
    attendance = await AttendanceSBT.new({ from: admin });
  });

  it("should mint an attendance SBT", async () => {
    const uri = "ipfs://attendance_metadata";
    await attendance.mintAttendance(student, uri, { from: admin });
    const tokenURI = await attendance.tokenURI(0);
    assert.equal(tokenURI, uri, "URI should match");
  });

  it("should prevent non-admin from minting", async () => {
    try {
      await attendance.mintAttendance(student, "ipfs://fail", { from: student });
      assert.fail("Non-admin minting should fail");
    } catch (err) {
      assert(err.message.includes("Only admin"), "Expected only admin error");
    }
  });
});
