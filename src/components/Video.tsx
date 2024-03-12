import Carousel from "react-material-ui-carousel";
import data from "./photodata.json";
import { useState, useEffect } from "react";
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
import "./Carousel.css";
import Typography from "@mui/material/Typography";

export function Video() {
  const images = data.photos;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (image) => {
    setSelectedImageIndex(images.indexOf(image));
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      {images[selectedImageIndex - 1] && (
        <img
          src={images[selectedImageIndex - 1].url}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: -1,
            width: "50%",
            height: "100%",
            objectFit:"cover",
            borderRadius:"10px"
          }}
          alt=""
        />
      )}
      {images[selectedImageIndex + 1] && (
        <img
          src={images[selectedImageIndex + 1].url}
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            zIndex: -1,
            width: "50%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
      )}
      <div className="carousel-container"
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
          onChange={(index) => setSelectedImageIndex(index)}
        >
          {images.map((image, i) => (
            <Item
              key={i}
              index={i}
              image={image}
              onImageClick={handleImageClick}
            />
          ))}
        </Carousel>
        <VideoDialog
          imageSrc={images[selectedImageIndex]?.url}
          open={dialogOpen}
          onClose={handleCloseDialog}
        />
      </div>
    </div>
  );
}

export function Item({ image, index, onImageClick }) {
  const commentData = localStorage.getItem("comments");
  const commentArray = JSON.parse(commentData);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => (prevIndex + 1) % commentArray.length);
    }, 10000); // Change comment every 10 seconds

    return () => clearInterval(interval);
  }, [commentArray.length]);

  const currentComment = commentArray[currentCommentIndex];
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
        width: 480,
        height: 680,
        color: "black",
        marginLeft: 22,
        position: "relative",
        marginTop: 10,
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
          width: 480,
          height: 500,
        }}
        alt={image.user}
      />
      <CardActions
        sx={{
          position: "absolute",
          bottom: 42,
          width: "96%",
          backgroundColor: "transparent",
          marginTop: 0,
        }}
        disableSpacing
      >
        <Typography variant="body1">
          {currentComment ? `${currentComment.user_name}: ${currentComment.comment_text}` : ""}
        </Typography>
        <Tooltip title={`${image.likes} likes`} arrow>
          <IconButton aria-label="add to favorites">
           
            <LikeButton likesCount={image.likesCount} />
          </IconButton>
        </Tooltip>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Tooltip
          title={`Comments - ${currentComment ? `${currentComment.user_name}: ${currentComment.comment_text}` : ""}`}
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
