import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import data from "./photodata.json";
import { useState } from "react";
import VideoDialog from "../components/VideoDialog";
import Typography from "@mui/material";

export function Video(autoplay: false) {
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
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        overflowY: "auto",
        width: 800,
      }}
    >
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        animation="slide"
      >
        {images.map((image, i) => (
          <Item
            key={i}
            image={image}
            onImageClick={() => handleImageClick(image)}
          />
        ))}
      </Carousel>
      <VideoDialog
        imageSrc={selectedImage?.url}
        open={dialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
}

export function Item({ image, onImageClick }) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onImageClick}
    >
      <img
        style={{ width: 600, height: 600 }}
        src={image.url}
        alt={image.name}
      />
      <h2>{image.user}</h2>
      <p>{image.description}</p>
    </Paper>
  );
}
