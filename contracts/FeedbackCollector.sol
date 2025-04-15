// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FeedbackCollector {
    struct Feedback {
        bytes32 hashedFeedback;
        uint256 timestamp;
    }

    Feedback[] public feedbacks;

    function submitFeedback(string memory feedback) external {
        bytes32 hash = keccak256(abi.encodePacked(feedback, msg.sender, block.timestamp));
        feedbacks.push(Feedback(hash, block.timestamp));
    }

    function getFeedbackCount() external view returns (uint256) {
        return feedbacks.length;
    }
}
