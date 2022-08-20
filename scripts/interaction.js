//  Imports
const { ethers } = require("hardhat");

// async main
async function main() {
  const MintNft = await ethers.getContractAt(
    "InftERC721",
    "0x4f6FD13b35Dc091D23c4dD73D58F556EeB3680F8"
  );
  await MintNft.safeMint(
    "0xF0ccc8B440Bf013a37ef722530B1e4727a785CfA",
    "ipfs://QmdNikDpoUrL3MfWmmywJuBmStXacoJ7q3Es3T7MbA4Zjn"
  );
  console.log(MintNft.address);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
