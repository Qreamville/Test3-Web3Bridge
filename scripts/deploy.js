//  Imports
const { ethers } = require("hardhat");

// async main
async function main() {
  const QreamNFT = await ethers.getContractFactory("QreamNFT");
  console.log("Deploying contract.....");
  const qreamNFT = await QreamNFT.deploy();
  await todoList.deployed();
  console.log(`Deployed the contract to: ${await qreamNFT.address} address`);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

// 0x665ee9efd30333246b941f290d8723eb4952f33cdb6e85c7ff9a753fd3c3d578
