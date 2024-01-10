import React from "react";
import CardComponent from "../CardComponent";
import data from "./photodata.json";
import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageDialog from "./ImageDialog";

const Home = () => {
  const image = data.photos;
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
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          width: 460,
          marginTop: 15350,
          marginBottom: 28,
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
        }}
      >
        <ImageList
          sx={{ width: "100%", height: "auto" }}
          variant="standard"
          cols={1}
          gap={10}
        >
          {image.map((image) => (
            <ImageListItem key={image.id}>
              <CardComponent image={image} onImageClick={handleImageClick} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Home;
