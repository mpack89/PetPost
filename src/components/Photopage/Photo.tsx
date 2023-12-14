import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../components/photodata.json";
import { useState } from "react";
import ImageDialog from "../ImageDialog";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardActions from "@mui/material/CardActions";
import { Avatar, IconButton } from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LikeButton from "../LikeButton";

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
        sx={{ width: 1400, height: 800, marginTop: 25 }}
        variant="standard"
        cols={3}
        gap={16}
      >
        {imagesToRender.map((image) => (
          <ImageListItem>
            <Card
              sx={{
                width: 400,
                height: 630,
                margin: 2,
                color: "black",
              }}
            >
              <CardHeader
                avatar={<Avatar>{image.avatar}</Avatar>}
                title={image.user}
                subheader=""
              />

              <img
                src={image.url}
                style={{
                  borderRadius: 4,
                  width: 400,
                  height: 500,
                }}
              />
              <CardActions disableSpacing>
                <IconButton aria-label="like" title="Like">
                  <LikeButton onClick={null} likesCount={null} />
                </IconButton>
                <IconButton aria-label="Share" title="Share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  title="Comment"
                  onClick={() => handleImageClick(image.url)}
                >
                  <ChatBubbleOutlineIcon />
                </IconButton>
              </CardActions>
            </Card>
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
