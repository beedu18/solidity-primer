//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.6;

contract InteractWithHello {
    string public message;
    constructor(string memory _msg) {
        message = _msg;
    }
}