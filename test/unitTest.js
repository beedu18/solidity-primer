const assert = require('assert');

const HelloWorld = artifacts.require("Hello");

contract("Hello", accounts => {
    it("Constructor Initializes Default Message", async () => {
        const defaultMessage = "constructor arguments will come here";
        
        let instance = await HelloWorld.deployed();
        let message = await instance.message();
        
        assert.strictEqual(message, defaultMessage);
    });

    it("Owner should be accounts[0]", async () => {
        const defaultOwner = accounts[0];

        let instance = await HelloWorld.deployed();
        let owner = await instance.owner();

        assert.strictEqual(owner, defaultOwner);
    });

    it("Only owner allowed to change string", async () => {
        const newString = "This is a New Message";

        let instance = await HelloWorld.deployed();
        await instance.setMessage(newString, {value: 10**16});
        let message = await instance.message();

        assert.strictEqual(message, newString);
    });

    it("Revert if msg.value is not sufficient", async () => {
        let instance = await HelloWorld.deployed();
        await assert.rejects(async () => {
            await instance.setMessage("Test", {value: 10**15});
        });
    });

    it("Revert if msg.sender is not owner", async() => {
        let instance = await HelloWorld.deployed();
        await assert.rejects(async () => {
            await instance.setMessage("I'm not the owner", {value: 10**18, from: accounts[1]});
        });
    });
});