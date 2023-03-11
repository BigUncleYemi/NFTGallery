import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppButton from "../../components/AppButton";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import { useNFTGalleryContext } from "../../context";

const Home: FC = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const { address, handleOnChangeAddress, handleGetNFts, loading } = useNFTGalleryContext();

  return (
    <>
      <Header />
      <section>
        <Stack gap={3}>
          <p>
            NFT Gallery for ethereum based addresses.
          </p>
          <Box
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: matchDownMd ? "80vw" : "60vw ",
            }}
          >
            <InputField value={address} handleOnChange={handleOnChangeAddress} placeholder="Enter address" />
          </Box>
          <Box>
            <AppButton handleOnClick={handleGetNFts} text="Submit" loading={loading} disabled={!address} />
          </Box>
        </Stack>
      </section>
    </>
  );
};

export default Home;
