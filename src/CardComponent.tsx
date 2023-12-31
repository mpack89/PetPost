import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import LikeButton from "./components/LikeButton";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const CardComponent = ({ image, onImageClick }) => {
  return (
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
        alt={image.user}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LikeButton onClick={null} likesCount={null} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={() => onImageClick(image.url)}>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
