import { expect } from 'chai';
import { getWallet, deployContract, LOCAL_RICH_WALLETS } from '../deploy/utils';

describe('Counter', function () {
  let counter: any;
  let wallet: any;

  // Set up the wallet and deploy the contract before each test
  beforeEach(async function () {
    wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey);

    counter = await deployContract("Counter", [], { wallet, silent: true });
  });

  it("Should set the counter value correctly", async function () {
    expect(await counter.getCounter()).to.eq(0n);

    const setCounterTx = await counter.setCounter(10n);
    await setCounterTx.wait();
    expect(await counter.getCounter()).to.eq(10n);
  });

  it("Should increment the counter by 1", async function () {
    expect(await counter.getCounter()).to.eq(0n);

    const incrementTx = await counter.incrementCounter();
    await incrementTx.wait();
    expect(await counter.getCounter()).to.eq(1n);
  });

  it("Should be able to increment the counter multiple times", async function () {
    await (await counter.incrementCounter()).wait();
    await (await counter.incrementCounter()).wait();
    await (await counter.incrementCounter()).wait();

    expect(await counter.getCounter()).to.eq(3n);
  });
});
