import { useState } from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "../../CardComponent";
import ImageDialog from "../../components/ImageDialog";
import PhotoData from "../../components/PhotoData";
import "./styles.css";

export default function WovenImageGrid({sounds}) {
  const images = PhotoData();
  const imagesToRender = images.filter((image) => image.page === "photo");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setDialogOpen(true);
  };

  const handleImageHover = (imageSrc) => {
    setHoveredImage(imageSrc);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <div className="page-container" style={{ backgroundImage: `url(${hoveredImage})` }}>
        <Grid container spacing={1} justifyContent={"space-around"}>
          {imagesToRender.map((image) => (
            <Grid item key={image.id}>
              <CardComponent
                image={image}
                onImageClick={handleImageClick}
                onImageHover={handleImageHover} 
                sounds={sounds}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        imageSrc={selectedImage}
        sounds={sounds}
      />
    </>
  );
}