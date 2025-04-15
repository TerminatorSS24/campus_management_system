// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LostAndFound {
    struct Item {
        string description;
        string photoURI;
        address finder;
        uint256 timestamp;
        bool claimed;
    }

    mapping(uint256 => Item) public items;
    uint256 public itemCount;

    function reportItem(string memory desc, string memory photoURI) public {
        items[itemCount] = Item(desc, photoURI, msg.sender, block.timestamp, false);
        itemCount++;
    }

    function claimItem(uint256 itemId) public {
        require(!items[itemId].claimed, "Already claimed");
        items[itemId].claimed = true;
    }
}
