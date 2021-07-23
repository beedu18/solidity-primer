//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.6;

contract Hello {

    string public message;
    address public owner;

    event Details(address indexed sender, uint tokens);

    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
    }

    function hello() public view returns(string memory) {
        return message;
    }

    function setMessage(string memory _message) public payable {
        
        //first check if modifier is owner
        require(msg.sender == owner, "Can only be modified by deployer");
        
        //then check if price requirement is fulfilled - val >= 0.01 eth
        require(msg.value >= 1e16, "Not Enough Ether");
        
        message = _message;
        emit Details(msg.sender, msg.value);
    }
}