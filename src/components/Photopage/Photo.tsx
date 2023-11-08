import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../components/photodata.json";
import { useState } from "react";
import ImageDialog from "../ImageDialog";
import commentData from "../commentsAPI.json";

export default function WovenImageList() {
  const image = data.photos;
  const imagesToRender = image.filter((image) => image.page === "photo");
  const comments = commentData;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const getCommentForImage = (selectedImageId) => {
    const imageWithComment = image.find((img) => img.id === selectedImageId);
    if (imageWithComment) {
      const comment = comments.find((c) => c.id === imageWithComment.id);
      return comment ? comment.comment : "No comment available";
    }
  };

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
        sx={{ width: 1200, height: 800, marginTop: 25 }}
        variant="woven"
        cols={4}
        gap={8}
      >
        {imagesToRender.map((image) => (
          <ImageListItem
            onClick={() => handleImageClick(image.url)}
            key={image.id}
          >
            <img src={image.url} />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        image={selectedImage}
        comment={getCommentForImage}
      />
    </div>
  );
}
