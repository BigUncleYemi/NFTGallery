import { Grid } from "@mui/material";
import { FC, useState } from "react";
import GalleryHeader from "./components/GalleryHeader";
import AppCard from "../../components/AppCard";
import AppGalleryModal from "../../components/AppGalleryModal/Index";
import { useNFTGalleryContext } from "../../context";

const Gallery: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [nft, setNFT] = useState({});
  const { NFTData = { ownedNfts : [] } } = useNFTGalleryContext();

  const handleClickOpen = (data: any) => {
    setOpenModal(true);
    setNFT(data);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <GalleryHeader />
      <AppGalleryModal data={nft} open={openModal} handleCloseModal={handleClose} />
      <Grid container spacing={{ xs: 2, md: 3 }} padding={2}>
        {NFTData?.ownedNfts?.map((ownedNft: any, index: number) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <AppCard handleViewNFT={handleClickOpen} data={ownedNft} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;
