import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../components/photodata.json";
import { useState } from "react";
import ImageDialog from "../ImageDialog";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import LikeButton from "../LikeButton";
import { IconButton, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

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
        sx={{ width: 1200, height: 800, marginTop: 25 }}
        variant="standard"
        cols={4}
        gap={8}
      >
        {imagesToRender.map((image) => (
          <ImageListItem
            onClick={() => handleImageClick(image.url)}
            key={image.id}
          >
            <img src={image.url} />
            <ImageListItemBar
              sx={{ width: 16, height: 16, margin: 1 }}
              title=""
              subtitle=""
              position="below"
              actionIcon={
                <div
                  style={{ display: "flex", flexDirection: "row", padding: 2 }}
                >
                  <div style={{ marginRight: 0 }}>
                    <LikeButton onClick={console.log("")} likesCount={null} />
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <ChatBubbleOutlineIcon fontSize="small" />
                  </div>
                </div>
              }
              actionPosition="left"
            />
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
