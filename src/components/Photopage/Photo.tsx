import { useState } from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "../../CardComponent";
import data from "../../components/photodata.json";
import ImageDialog from "../ImageDialog";

export default function WovenImageGrid() {
  const images = data.photos;
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
      <Grid
        //justifyContent="space-around"
        container
        spacing={2}
        borderColor="blue"
        padding={4}
        //alignItems="center"
      >
        {imagesToRender.map((image) => (
          <Grid
            item
            key={image.id}
            xs={12}
            sm={6}
            md={4}
            //justifyContent="center"
            //alignContent="center"
          >
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
