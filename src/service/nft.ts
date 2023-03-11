import alchemy from "./index";


const getAddressNFT = async (address: string) => {
  try {
    const nfts = await alchemy.nft.getNftsForOwner(address);
    return nfts;
  } catch (error) {
    console.log(error);
  }
}

export {
  getAddressNFT,
};
