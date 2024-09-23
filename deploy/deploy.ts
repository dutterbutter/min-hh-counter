export default async function (hre: any) {
     const [signer] = await hre.ethers.getSigners();
    
     if (!signer) {
       throw new Error("⛔️ No signer found in the current network configuration!");
     }

     const counter = await hre.ethers.deployContract('Counter', [], signer);
     await counter.waitForDeployment();
     
     console.info(`Counter deployed to: ${await counter.getAddress()}`);
}
