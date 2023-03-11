import { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import AppCard from "../AppCard";

interface AppGalleryModalType {
  open: boolean;
  handleCloseModal: () => void;
}

const AppGalleryModal: FC<AppGalleryModalType> = ({
  open,
  handleCloseModal,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        sx={{ top: 100 }}
        onClose={handleCloseModal}
        aria-labelledby="view-nft-dialog"
        maxWidth="lg"
        scroll="paper"
      >
        <DialogContent sx={{ padding: 0 }}>
          <Box
            sx={{
              backgroundImage: `url('https://cdn.dribbble.com/userupload/2951612/file/original-daeee5f7b7f709b42c16905144e3f547.png')`,
              height: 300,
              backgroundPosition: "center",
              position: "relative",
              display: fullScreen ? "none" : "block",
            }}
          />
          <Box
            sx={
              !fullScreen
                ? {
                    position: "relative",
                    width: 387,
                    margin: "-15rem 0px 30px 50px",
                  }
                : {
                    position: "relative",
                    width: 387,
                    padding: "30px",
                    margin: "auto",
                  }
            }
          >
            <AppCard justImage />
          </Box>
          <DialogContentText padding={3}>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <DialogActions>
            <Button autoFocus variant="contained" color="success">
              Purchase
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppGalleryModal;
