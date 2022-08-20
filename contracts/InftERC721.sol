// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface InftERC721 {
    function safeMint(address to, string memory uri) external;

    function tokenURI(uint256 tokenId) external;
}
