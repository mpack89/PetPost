import { useState } from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "../../CardComponent";
import ImageDialog from "../ImageDialog";
import PhotoData from "../PhotoData";

export default function WovenImageGrid() {
  const images = PhotoData();
  const imagesToRender = images.filter((image) => image.page === "photo");
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
    <>
      <Grid container spacing={1} justifyContent={"space-around"}>
        {imagesToRender.map((image) => (
          <Grid item key={image.id}>
            <CardComponent image={image} onImageClick={handleImageClick} />
          </Grid>
        ))}
      </Grid>

      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        imageSrc={selectedImage}
      />
    </>
  );
}
