import { createContext, useContext, useState } from "react";
import { getAddressNFT } from "../service/nft";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { OwnedNftsResponse } from "alchemy-sdk";

interface NFTGalleryContextType {
  address: string;
  handleOnChangeAddress: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleRestAddress: () => void;
  handleGetNFts: () => void;
  loading: boolean;
  showNFTPage: boolean;
  NFTData: OwnedNftsResponse | null | undefined;
}

let initialState: NFTGalleryContextType = {
  address: "",
  handleOnChangeAddress: () => {},
  handleRestAddress: () => {},
  handleGetNFts: () => {},
  loading: false,
  showNFTPage: false,
  NFTData: null,
};

const NFTGalleryContext = createContext<NFTGalleryContextType>(initialState);

export function NFTGalleryWrapper({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  const [address, setAddress] = useState<string>("");
  const [NFTData, setNFTData] = useState<OwnedNftsResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [showNFTPage, setShowNFT] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastDetails, setToastDetails] = useState<{
    message: string;
    status: AlertColor;
  }>({
    message: "",
    status: "info",
  });
  const handleOnChangeAddress = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    setAddress(newValue);
  };

  const handleRestAddress = () => {
    setAddress("");
  };

  const handleGetNFts = async () => {
    setLoading(true);
    try {
      const res = await getAddressNFT(address);
      // @ts-ignore
      if (res?.ownedNfts?.length < 1) {
        setShowToast(true);
        setToastDetails({
          status: "info",
          message: "This address has no NFTs.",
        });
        setTimeout(() => {
          setShowToast(false);
          setToastDetails({
            status: "info",
            message: "",
          });
        }, 7000)
      } else {
        setNFTData(res);
        setShowNFT(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setShowToast(false);
        setToastDetails({
          status: "error",
          message: "An error occurred",
        });
      }, 7000)
    }
  };

  return (
    <NFTGalleryContext.Provider
      value={{
        address,
        handleOnChangeAddress,
        handleRestAddress,
        handleGetNFts,
        loading,
        NFTData,
        showNFTPage
      }}
    >
      <Snackbar
        open={showToast}
        autoHideDuration={6000}
        onClose={() => setShowToast(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setShowToast(false)}
          severity={toastDetails?.status}
          sx={{ width: "100%" }}
        >
          {toastDetails?.message}
        </Alert>
      </Snackbar>
      {children}
    </NFTGalleryContext.Provider>
  );
}

export function useNFTGalleryContext(): NFTGalleryContextType {
  return useContext(NFTGalleryContext);
}
