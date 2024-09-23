import { deployContract, getProvider } from "./utils";
import { Wallet } from "zksync-ethers";

// An example of a basic deploy script
// It will deploy a Greeter contract to selected network
// as well as verify it on Block Explorer if possible for the network
export default async function (hre: any) {
  const provider = getProvider();
  const wallet = new Wallet(hre.network.config.accounts?.[0]?? process.env.WALLET_PRIVATE_KEY!, provider);

  const contractArtifactName = "Counter";
  const constructorArguments = [];
  await deployContract(contractArtifactName, constructorArguments, { wallet });
}
