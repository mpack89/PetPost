import Carousel from "react-material-ui-carousel";
import data from "./photodata.json";
import { useState } from "react";
import VideoDialog from "../components/VideoDialog";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import LikeButton from "../components/LikeButton";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { TextField } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export function Video() {
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
        marginTop: 36,
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
  const commentData = localStorage.getItem("comments");
  const commentArray = JSON.parse(commentData);

  const commentsForImage = commentArray.filter(
    (comment) => comment.photo_id === image.id
  );

  const commentCount = commentsForImage.length;

  let firstCommentText = "";
  if (commentCount > 0) {
    const words = commentsForImage[0].comment_text.split(" ");

    firstCommentText =
      words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
  }

  const firstCommentUser =
    commentCount > 0 ? commentsForImage[0].user_name : "";
  
  
  return (
    <Card
      sx={{
        width: 450,
        height: 630,
        color: "black",
        marginLeft: 22,
        position: "relative",
      }}
    >
      <CardHeader
        titleTypographyProps={{
          fontSize: 16,
          fontFamily: "revert",
          fontWeight: 500,
          textAlign: "center",
        }}
        avatar={<Avatar src={image.avatar} />}
        title={image.user}
        subheader=""
        sx={{
          backgroundColor: "#ffffff",
          display: "grid",
          gridTemplateColumns: "auto auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <img
        src={image.url}
        style={{
          borderRadius: 4,
          width: 450,
          height: 580,
        }}
        alt={image.user}
      />
      <CardActions
        sx={{
          position: "absolute",
          bottom: 0,
          width: "96%",
          backgroundColor: "transparent",
        }}
        disableSpacing
      >
        <TextField
          label="Reply to..."
          variant="outlined"
          size="small"
          sx={{
            marginLeft: 0,
            marginRight: 0,
          }}
          fullWidth
        />
        <IconButton aria-label="add to favorites">
          <LikeButton onClick={null} likesCount={null} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Tooltip
          title={`${commentCount} Comments - ${firstCommentUser}:${firstCommentText}`}
          arrow
        >
        <IconButton onClick={() => onImageClick(image)}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
