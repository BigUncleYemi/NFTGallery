import { FC } from "react";
import { styled } from '@mui/material/styles';
import IconButton, { ButtonProps } from '@mui/material/Button';
import { ArrowBack } from "@mui/icons-material";

const CustomIconButton = styled(IconButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('rgb(0,0,0)'),
  backgroundColor: 'rgb(0,0,0)',
  borderRadius: "100%",
  padding: 10,
  minWidth: 30,
  '&:hover': {
    backgroundColor: 'rgb(0,0,0, 0.8)',
  },
}));

const BackButton: FC<{onClick: () => void}> = ({ onClick }) => {
  return (
    <CustomIconButton variant="contained" size="medium" onClick={onClick}><ArrowBack fontSize="small" /></CustomIconButton>
  )
}

export default BackButton;
