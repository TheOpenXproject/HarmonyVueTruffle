const MyContract = artifacts.require("MyContract");

module.exports = async function (deployer) {
  await deployer.deploy(MyContract)
  .then(
  		async function(){
  			console.log(`   Deployed my contract at = ${MyContract.address}\n`);
  		})
};
