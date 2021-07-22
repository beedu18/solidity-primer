const HelloWorld = artifacts.require("Hello"); //require the contract name not the filename

module.exports = function (deployer) {
  deployer.deploy(HelloWorld, "constructor arguments will come here");
};
