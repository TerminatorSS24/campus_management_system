// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CertificateVault is ERC721URIStorage {
    address public admin;
    uint256 public certId;

    constructor(address _admin) ERC721("CertificateSBT", "CSBT") {
        admin = _admin;
    }

    function issueCertificate(address to, string memory certURI) external {
        require(msg.sender == admin, "Unauthorized");
        _mint(to, certId);
        _setTokenURI(certId, certURI);
        certId++;
    }

    function _beforeTokenTransfer(address from, address to, uint256 /*tokenId*/) internal pure {
        require(from == address(0) || to == address(0), "Soulbound: non-transferable");
    }
}
