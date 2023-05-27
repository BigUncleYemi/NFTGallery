import { Box, Grid, Pagination } from "@mui/material";
import { FC, useState } from "react";
import GalleryHeader from "./components/GalleryHeader";
import AppCard from "../../components/AppCard";
import AppGalleryModal from "../../components/AppGalleryModal/Index";
import { useNFTGalleryContext } from "../../context";

const Gallery: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [nft, setNFT] = useState({});
  const { NFTData = { ownedNfts: [] } } = useNFTGalleryContext();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
      <AppGalleryModal
        data={nft}
        open={openModal}
        handleCloseModal={handleClose}
      />
      <Grid container spacing={{ xs: 2, md: 3 }} padding={2}>
        {NFTData?.ownedNfts?.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        )?.map((ownedNft: any, index: number) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <AppCard handleViewNFT={handleClickOpen} data={ownedNft} />
          </Grid>
        ))}
        {NFTData?.ownedNfts?.length > 0 && (
          <Box padding={6} paddingBottom={0}>
            <Pagination defaultCurrent={1} total={NFTData?.ownedNfts?.length} onChange={handleChange} />
          </Box>
        )}
      </Grid>
    </>
  );
};

export default Gallery;
