# Basic smart contracts in solidity

Fiddling with the solidity programming language

* using `truffle` development environment
* function modifiers to validate transactions
* interactions between contracts
* unit tests

It is better to use a virtual node environment for installing `truffle` as this space is constanly changing and specific versions might not be compatible in the future
<br><br>
Node virtual environments can be created using the `nodeenv` python module
<br><br>
Once inside the virtual environment, run `npm install -g truffle` to install truffle within the environment
<br><br>
This repo uses `truffle v5.4.1` as the development environment
<br><br>
Use `truffle version` to check
<br><br>
Result will be similar to
```
Truffle v5.4.1 (core: 5.4.1)
Solidity - 0.8.6 (solc-js)
Node v16.5.0
Web3.js v1.4.0
```
To enter the development console, use `truffle develop`
<br><br>
Then you should get the `truffle(develop)>` prompt
<br><br>
Next Steps:

* compile the contracts using `compile` 
* migrate to the test chain using `migrate` or `migrate --reset` if doing multiple times
    * in the console, contracts can be interacted with by creating an instance of the deployed contracts
    * the language for interacting in the console is javascript 
    * use `let instance = await <ContractName>.deployed()` to store the contract instance in a variable
    * functions can be called using the `.` operator
* to run the tests specified in `test/unitTest.js` use `test`
    ```
    Contract: Hello
    √ Constructor Initializes Default Message (112ms)
    √ Owner should be accounts[0] (123ms)
    √ Only owner allowed to change string (310ms)
    √ Revert if msg.value is not sufficient (1717ms)
    √ Revert if msg.sender is not owner (209ms)
    
    5 passing (3s)
    
    ```