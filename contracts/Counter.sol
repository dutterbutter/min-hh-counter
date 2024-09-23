// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private counter;

    // Function to set the counter to a specific value
    function setCounter(uint256 _counter) public {
        counter = _counter;
    }

    // Function to get the current counter value
    function getCounter() public view returns (uint256) {
        return counter;
    }

    // Function to increment the counter by 1
    function incrementCounter() public {
        counter += 1;
    }
}
