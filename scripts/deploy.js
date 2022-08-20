//  Imports
const { ethers } = require("hardhat");

// async main
async function main() {
  const Qream = await ethers.getContractFactory("Qream");
  console.log("Deploying contract.....");
  const qream = await Qream.deploy();
  await qream.deployed();
  console.log(`Deployed the contract to: ${await qream.address} address`);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
