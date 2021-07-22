const HelloWorld = artifacts.require("Hello"); //require the contract name not the filename
const InteractiveContract = artifacts.require("InteractWithHello");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld, "constructor arguments will come here")
    .then(async () => {
      let instance = await HelloWorld.deployed();
      let message = instance.message();
      return deployer.deploy(InteractiveContract, message);
    });
};
