var ArmenianBlockchainBankToken = artifacts.require("ArmenianBlockchainBankToken");
var ArmenianBlockchainBankTimelock = artifacts.require("ArmenianBlockchainBankTimelock");

var ArmenianBlockchainBankTokenVesting = artifacts.require("ArmenianBlockchainbankTokenVesting");

module.exports = async function(deployer) {

  // deployer.deploy(ArmenianBlockchainBankToken).then(()=>{
  //   var instance = ArmenianBlockchainBankToken;
  //   console.log('ArmenianBlockchainBankToken is ', instance.address);
  //   return deployer.deploy(ArmenianBlockchainBankTimelock, instance.address);
  // });

  deployer.deploy(ArmenianBlockchainBankToken);
  // deployer.deploy(ArmenianBlockchainBankTokenVesting, account_three, Math.floor(new Date().getTime()/1000), 0, 1000, 100, true);

 };
