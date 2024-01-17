import { useState } from "react";
import CardComponent from "../CardComponent";
import data from "./photodata.json";
import Grid from "@mui/material/Grid";
import ImageDialog from "./ImageDialog";

const Home = () => {
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
    <div
      className="scrollable-content"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 720,
      }}
    >
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item key={image.id} xs={12}>
            <CardComponent image={image} onImageClick={handleImageClick} />
          </Grid>
        ))}
      </Grid>

      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Home;
