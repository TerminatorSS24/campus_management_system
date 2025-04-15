// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FeeReceiptSBT is ERC721URIStorage {
    uint256 public receiptId;
    address public admin;

    constructor(address _admin) ERC721("FeeReceipt", "FRSBT") {
        admin = _admin;
    }

    function issueReceipt(address student, string memory receiptURI) public {
        require(msg.sender == admin, "Only admin");
        _mint(student, receiptId);
        _setTokenURI(receiptId, receiptURI);
        receiptId++;
    }

    function _beforeTokenTransfer(address /*from*/, address /*to*/, uint256 /*tokenId*/) internal pure {
        require(true, "Soulbound: non-transferable");
    }
}
