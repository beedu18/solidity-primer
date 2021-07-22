//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.6;

contract Hello {

    string public message;
    address public owner;

    constructor(string memory _message) {
        message = _message;
        owner = msg.sender;
    }

    function hello() public view returns(string memory) {
        return message;
    }

    function setMessage(string memory _message) public payable {
        //first check if modifier is owner
        require(msg.sender == owner, "Can only be modified my deployer");
        
        //then check if price requirement is fulfilled
        require(msg.value > 1 ether, "Not Enough Ether");
        
        message = _message;
    }
}