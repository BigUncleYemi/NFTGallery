import { Grid } from "@mui/material";
import { FC, useState } from "react";
import GalleryHeader from "./components/GalleryHeader";
import AppCard from "../../components/AppCard";
import AppGalleryModal from "../../components/AppGalleryModal/Index";

const Gallery: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <GalleryHeader />
      <AppGalleryModal open={openModal} handleCloseModal={handleClose} />
      <Grid container spacing={{ xs: 2, md: 3 }} padding={2}>
        {["","","","","","","","","",""].map((_item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <AppCard handleViewNFT={handleClickOpen} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;
