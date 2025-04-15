// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract RoomBookingNFT is ERC721 {
    uint256 public bookingId;
    address public admin;

    struct Booking {
        uint256 roomId;
        uint256 startTime;
        uint256 endTime;
    }

    mapping(uint256 => Booking) public bookings;

    constructor(address _admin) ERC721("RoomBooking", "RBNFT") {
        admin = _admin;
    }

    function bookRoom(address user, uint256 roomId, uint256 startTime, uint256 endTime) external {
        require(msg.sender == admin, "Only admin can book");
        bookings[bookingId] = Booking(roomId, startTime, endTime);
        _mint(user, bookingId);
        bookingId++;
    }

    function burn(uint256 tokenId) external {
        require(msg.sender == admin, "Only admin can burn");
        _burn(tokenId);
    }
}
