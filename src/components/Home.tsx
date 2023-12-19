import * as React from "react";
import CardComponent from "../CardComponent";
import data from "./photodata.json";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageDialog from "./ImageDialog";

const Home = () => {
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
        top: "30%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ImageList
        sx={{ width: 1800, height: 1000, marginTop: 25 }}
        variant="standard"
        cols={1}
        gap={10}
      >
        {imagesToRender.map((image) => (
          <ImageListItem key={image.id}>
            <CardComponent image={image} onImageClick={handleImageClick} />
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
};

export default Home;
