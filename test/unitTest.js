const HelloWorld = artifacest.require("Hello");

contract("Hello", accounts => {
    it("Constructor Initializes Default Message", async () => {
        const defaultMessage = "constructor arguments will come here";
        
        let instance = await HelloWorld.deployed();
        let message = instance.message();
        
        assert.equal(message, defaultMessage);
    });

    it("Owner should be accounts[0]", async () => {
        const defaultOwner = accounts[0];

        let instance = await HelloWorld.deployed();
        let owner = instance.owner();

        assert.equal(owner, defaultOwner);
    });

    it("String value was Changed by Owner", async () => {
        const newStringValue = "This is a test";

        let instance = await HelloWorld.deployed();
        instance.setMessage(newStringValue);
        let newMessage = instance.message();

        assert.equal(newStringValue, newMessage);
    });
});