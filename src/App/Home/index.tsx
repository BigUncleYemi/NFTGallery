import { FC } from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppButton from "../../components/AppButton";
import Header from "../../components/Header";
import InputField from "../../components/InputField";

const Home: FC = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Header />
      <section>
        <Stack gap={3}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Description.
          </p>
          <Box
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: matchDownMd ? "80vw" : "60vw ",
            }}
          >
            <InputField />
          </Box>
          <Box>
            <AppButton />
          </Box>
        </Stack>
      </section>
    </>
  );
};

export default Home;
