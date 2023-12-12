import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../components/photodata.json";
import { useState } from "react";
import ImageDialog from "../ImageDialog";
import CustomImageListItemBarNav from "../../CustomItemBarNav";
import ImageHeader from "../ImageHeader";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export default function WovenImageList() {
  const image = data.photos;
  const imagesToRender = image.filter((image) => image.page === "photo");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "44%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ImageList
        sx={{ width: 1400, height: 800, marginTop: 25 }}
        variant="standard"
        cols={3}
        gap={16}
      >
        {imagesToRender.map((image) => (
          <ImageListItem sx={{}}>
            <Card sx={{ width: 400, height: 600, margin: 2 }}>
              <ImageHeader user={image.user} avatar={image.avatar} />
              <img
                src={image.url}
                style={{
                  borderRadius: 4,
                  width: 400,
                  height: 500,
                }}
              />
            </Card>
          </ImageListItem>
        ))}
      </ImageList>

      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        imageSrc={selectedImage}
      />
    </div>
  );
}
