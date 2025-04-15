// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract AttendanceSBT is ERC721URIStorage {
    uint256 public tokenIdCounter;
    address public admin;

    constructor(address _admin) ERC721("AttendanceSBT", "ASBT") {
        admin = _admin;
    }

    function mintAttendance(
        address student,
        string memory metadataURI
    ) external {
        require(msg.sender == admin, "Only admin can mint");
        uint256 newId = tokenIdCounter++;
        _mint(student, newId);
        _setTokenURI(newId, metadataURI);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256
    ) internal pure {
        require(
            from == address(0) || to == address(0),
            "Soulbound: non-transferable"
        );
    }
}
