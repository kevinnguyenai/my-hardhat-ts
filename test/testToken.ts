import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";

describe("Token", function () {
  let accounts: Signer[];
  let Token;
  let hardhatToken: any;
  let alice: Signer;
  let bob: Signer;

  beforeEach(async function () {
    accounts = await ethers.getSigners();
    alice = accounts[1];
    bob = accounts[2];
    Token = await ethers.getContractFactory("Token");
    hardhatToken = await Token.deploy();
  });

  describe("Token", function() {
    it("Deployment should assign the total supply of tokens to the owner", async() => {
        const ownerBalance = await hardhatToken.balanceOf(accounts[0].getAddress());
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    });
});

describe('Transfer token from A to B', async() => {
    it('A connect and trasfer to B', async() => {
        const OwnerTransferAlice = await hardhatToken.transfer(alice.getAddress(), 50);
        expect(await hardhatToken.balanceOf(alice.getAddress())).to.equal(50);
        const AliceTransferBob = await hardhatToken.connect(alice).transfer(bob.getAddress(), 50);
        expect(await hardhatToken.balanceOf(bob.getAddress())).is.equal(50);
    });
});

});