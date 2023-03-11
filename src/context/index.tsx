import { createContext, useContext, useState } from 'react';

interface NFTGalleryContextType {
  address: string;
  handleOnChangeAddress: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleRestAddress: () => void;
};

let initialState: NFTGalleryContextType = {
  address: '',
  handleOnChangeAddress: () => {},
  handleRestAddress: () => {},
};

const NFTGalleryContext = createContext<NFTGalleryContextType>(initialState);

export function NFTGalleryWrapper({ children } : { children: string | JSX.Element | JSX.Element[] }) {
  const [address, setAddress] = useState<string>('');
  const handleOnChangeAddress = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setAddress(newValue);
  }

  const handleRestAddress = () => {
    setAddress('');
  }

  return (
    <NFTGalleryContext.Provider value={{ address, handleOnChangeAddress, handleRestAddress }}>
      {children}
    </NFTGalleryContext.Provider>
  );
}

export function useNFTGalleryContext(): NFTGalleryContextType {
  return useContext(NFTGalleryContext);
}
