import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface AppCardTye {
  handleViewNFT?: () => void;
  justImage?: boolean;
}

const AppCard: FC<AppCardTye> = ({ handleViewNFT, justImage }) => {
  return (
    <Card onClick={handleViewNFT}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://cdn.dribbble.com/userupload/2951612/file/original-daeee5f7b7f709b42c16905144e3f547.png"
        title="green iguana"
      />
      {justImage ? null : (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default AppCard;
