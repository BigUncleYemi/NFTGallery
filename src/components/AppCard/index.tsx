import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Marked } from "@ts-stack/markdown";

interface AppCardTye {
  handleViewNFT?: (data: any) => void;
  justImage?: boolean;
  data: any;
}

const AppCard: FC<AppCardTye> = ({ handleViewNFT, justImage, data }) => {
  return (
    <Card onClick={() => handleViewNFT(data)}>
      <CardMedia
        sx={{ height: 300 }}
        image={data?.contract?.openSea?.imageUrl || data?.rawMetadata?.image || import.meta.env.VITE_DEFAULT_IMG}
        title="green iguana"
      />
      {justImage ? null : (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.rawMetadata?.name || data?.contract?.name}
          </Typography>
          <Typography gutterBottom variant="overline" component="div">
            {data?.contract?.openSea?.collectionName || "This NFT is not part of a collection"}
          </Typography>
          <Typography variant="body2" color="text.secondary" height="41px" overflow={"clip"} component="div">
            {data?.rawMetadata?.description || data?.contract?.description || data?.contract?.openSea?.description ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: Marked.parse(data?.contract?.openSea?.description),
                }}
              />
            ) : (
              <p>There is no description provided.</p>
            )}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default AppCard;
