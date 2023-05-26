import { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/icons-material/Link";
import { Box, Typography } from "@mui/material";
import AppCard, { convertIPFSLink } from "../AppCard";
import { Marked } from "@ts-stack/markdown";
import AppButton from "../AppButton";

interface AppGalleryModalType {
  open: boolean;
  data: any;
  handleCloseModal: () => void;
}

const AppGalleryModal: FC<AppGalleryModalType> = ({
  open,
  handleCloseModal,
  data,
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
        <DialogContent
          sx={fullScreen ? { padding: 0 } : { padding: 0, minWidth: 900 }}
        >
          <Box
            sx={{
              backgroundImage: `url(${convertIPFSLink(
                data?.media?.[0]?.gateway ||
                  data?.contract?.openSea?.imageUrl ||
                  data?.rawMetadata?.image ||
                  import.meta.env.VITE_DEFAULT_IMG
              )})`,
              height: 300,
              backgroundPosition: "center",
              backgroundSize: "cover",
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
            <AppCard data={data} justImage />
          </Box>
          <div style={{ padding: "10px 30px" }}>
            <DialogContentText component="div">
              <Typography
                gutterBottom
                variant="h4"
                fontWeight="bold"
                component="div"
              >
                {data?.rawMetadata?.name || data?.contract?.name}
              </Typography>
            </DialogContentText>
            <DialogContentText component="div">
              <Typography gutterBottom variant="overline" component="div">
                Collection Name:{" "}
                {data?.contract?.openSea?.collectionName ||
                  "This NFT is not part of a collection"}
              </Typography>
            </DialogContentText>
            <div style={{ wordBreak: "break-all" }}>
              <DialogContentText component="div">
                <Typography gutterBottom variant="h5" component="div">
                  Description
                </Typography>
              </DialogContentText>
              {data?.rawMetadata?.description && (
                <DialogContentText paddingBottom={3}>
                  {data?.rawMetadata?.description}
                </DialogContentText>
              )}
              {data?.contract?.description && (
                <DialogContentText paddingBottom={3}>
                  {data?.contract?.description}
                </DialogContentText>
              )}
              <DialogContentText paddingBottom={3} component="div">
                {data?.contract?.openSea?.description ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: Marked.parse(
                        data?.contract?.openSea?.description
                      ),
                    }}
                  />
                ) : (
                  <p>There is no description provided.</p>
                )}
              </DialogContentText>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppGalleryModal;
