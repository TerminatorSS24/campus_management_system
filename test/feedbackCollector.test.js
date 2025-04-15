const FeedbackCollector = artifacts.require("FeedbackCollector");

contract("FeedbackCollector", ([admin, student]) => {
  let feedback;

  beforeEach(async () => {
    feedback = await FeedbackCollector.new({ from: admin });
  });

  it("should accept feedback with hashed message", async () => {
    const hash = web3.utils.soliditySha3("great-teacher");
    await feedback.submitFeedback(hash, { from: student });
    const fb = await feedback.feedbacks(0);
    assert.equal(fb.feedbackHash, hash);
  });
});
