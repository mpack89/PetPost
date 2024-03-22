import { useState } from "react";
import CardComponent from "../CardComponent";
import data from "./photodata.json";
import Grid from "@mui/material/Grid";
import ImageDialog from "./ImageDialog";

const Home = ({sounds}) => {
  const images = data.photos;
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
        container
        spacing={2}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {images.map((image) => (
          <Grid item key={image.id} xs={12}>
            <CardComponent image={image} onImageClick={handleImageClick} onImageHover={null} sounds={sounds}  />
          </Grid>
        ))}
      </Grid>

      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        imageSrc={selectedImage}
        sounds={sounds}
      />
    </>
  );
};

export default Home;
