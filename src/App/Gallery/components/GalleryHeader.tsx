import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FC } from "react";
import Header from "../../../components/Header";
import "../../App.css";
import BackButton from "../../../components/AppButton/BackButton";
import { useNFTGalleryContext } from "../../../context";

const GalleryHeader: FC = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const { address, handleRestAddress } = useNFTGalleryContext();

  return (
    <Stack
      sx={{ boxShadow: "0px 10px 9px 2px #8080801f", marginBottom: "1.5rem" }}
    >
      {matchDownMd ? (
        <>
          <Header />
          <Box>
            <Stack
              gap={2}
              direction="row"
              alignItems="center"
              sx={{
                padding: "1.5rem 1.3rem 1.5rem",
                borderTop: "1px solid #dfdfdf",
              }}
            >
              <div>
                <BackButton onClick={handleRestAddress} />
              </div>
              <Tooltip title={address} arrow>
                <Typography
                  component="h2"
                  fontSize={"1.5rem"}
                  sx={{ overflowX: "scroll" }}
                >
                  {address}
                </Typography>
              </Tooltip>
            </Stack>
          </Box>
        </>
      ) : (
        <header>
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" gap={2} alignItems="center">
                <div>
                  <BackButton onClick={handleRestAddress} />
                </div>
                <p className="--title">NFT Gallery</p>
              </Stack>
              <Tooltip title="address" arrow>
                <Typography
                  component="h2"
                  fontSize={"1.5rem"}
                  sx={{ overflowX: "scroll" }}
                >
                  {address}
                </Typography>
              </Tooltip>
            </Stack>
          </Box>
        </header>
      )}
    </Stack>
  );
};

export default GalleryHeader;
