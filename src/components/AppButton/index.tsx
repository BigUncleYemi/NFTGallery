import { FC } from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("rgb(0,0,0)"),
  backgroundColor: "rgb(0,0,0)",
  "&:hover": {
    backgroundColor: "rgb(0,0,0, 0.8)",
  },
}));

const AppButton: FC<{
  handleOnClick: () => void;
  text: string;
  loading?: boolean;
  disabled?: boolean;
  endIcon?: any
}> = ({ handleOnClick, text, loading, disabled, endIcon }) => {
  return (
    <CustomButton
      variant="contained"
      size="large"
      onClick={handleOnClick}
      disabled={loading || disabled}
      endIcon={endIcon}
    >
      {text}
    </CustomButton>
  );
};

export default AppButton;
