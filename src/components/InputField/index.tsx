import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { FC } from "react";

const CustomTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-input": {
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

const InputField: FC<{
  value: string;
  handleOnChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
}> = ({ value, handleOnChange, placeholder = "" }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // const address = e.target.value;
    // const valid = WAValidator.validate(address);
    // console.log(valid);
    handleOnChange(e);
  };
  return (
    <CustomTextField
      id="input"
      variant="outlined"
      size="medium"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputField;
