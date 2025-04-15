// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CampusAdmin {
    mapping(address => string) public roles;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function assignRole(address user, string memory role) public {
        require(msg.sender == owner, "Only owner");
        roles[user] = role;
    }

    function getRole(address user) public view returns (string memory) {
        return roles[user];
    }
}
