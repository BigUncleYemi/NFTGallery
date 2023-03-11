import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { FC } from "react";
import { useNFTGalleryContext } from "../../context";

const CustomTextField = styled(TextField)({
  width: "100%",
  '& .MuiInputBase-input': {
    textAlign: "center",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px",
    "& fieldset": {
      borderColor: "rgba(0, 0, 0)",
      borderWidth: "3px",
    },
    "&:hover fieldset": {
      borderColor: "rgba(0, 0, 0, 0.4)",
      borderWidth: "3px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(0, 0, 0, 0.6)",
      borderWidth: "3px",
    },
  },
});

const InputField: FC = () => {
  const { address, handleOnChangeAddress } = useNFTGalleryContext();
  return <CustomTextField id="input" variant="outlined" size="medium" value={address} onChange={handleOnChangeAddress} />;
};

export default InputField;
