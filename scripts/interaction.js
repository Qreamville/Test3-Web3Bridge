//  Imports
const { ethers } = require("hardhat");

// async main
async function main() {
  const MintNft = await ethers.getContractAt(
    "InftERC721",
    "0x1b830521f43423a58f214614cDedCB210956b059"
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
