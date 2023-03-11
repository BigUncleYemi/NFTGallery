import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FC } from "react";
import Header from "../../../components/Header";
import "../../App.css";
import BackButton from "../../../components/AppButton/BackButton";

const GalleryHeader: FC = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

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
                <BackButton />
              </div>
              <Tooltip title="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" arrow>
                <Typography
                  component="h2"
                  fontSize={"1.5rem"}
                  sx={{ overflowX: "scroll" }}
                >
                  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
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
                  <BackButton />
                </div>
                <p className="--title">NFT Gallery</p>
              </Stack>
              <Tooltip title="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" arrow>
                <Typography
                  component="h2"
                  fontSize={"1.5rem"}
                  sx={{ overflowX: "scroll" }}
                >
                  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
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
