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
import Tooltip from "@mui/material/Tooltip";
import "./Carousel.css";
import Typography from "@mui/material/Typography";

export function Video({ autoplay, sounds }) {
  const images = data.photos;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const carouselInterval = 10000;
  const handleImageClick = (image) => {
    setSelectedImageIndex(images.indexOf(image));
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <img
        src={
          images[(selectedImageIndex + images.length - 1) % images.length].url
        }
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: -1,
          width: "50%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        alt=""
      />
      <img
        src={images[(selectedImageIndex + 1) % images.length].url}
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
      <div
        className="carousel-container"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: "hidden",
          width: 800,
        }}
      >
        <Carousel
          autoPlay={autoplay}
          navButtonsAlwaysVisible={true}
          animation="slide"
          index={selectedImageIndex}
          onChange={(index) => setSelectedImageIndex(index)}
          IndicatorIcon={false}
          interval={carouselInterval}
        >
          {images.map((image, i) => (
            <Item
              key={i}
              index={i}
              image={image}
              onImageClick={handleImageClick}
              sounds={sounds}
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

export function Item({ image, index, onImageClick, sounds }) {
  const commentData = localStorage.getItem("comments");
  const commentArray = JSON.parse(commentData);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const commentsForImage = commentArray.filter(
      (comment) => comment.photo_id === image.id
    );

    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => {
        if (prevIndex + 1 >= commentsForImage.length) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [commentArray, image.id]);

  const commentsForImage = commentArray.filter(
    (comment) => comment.photo_id === image.id
  );

  const currentComment = commentsForImage[currentCommentIndex];
  const commentCount = commentsForImage.length;

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
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "360px",
            height: "30px",
            marginBottom: 12,
          }}
        >
          <Typography sx={{ fontSize: 10 }} variant="body1">
            <span style={{ fontWeight: "bold" }}>
              {currentComment ? `${currentComment.user_name}: ` : ""}
            </span>
            {currentComment ? currentComment.comment_text : ""}
          </Typography>
        </div>
        <Tooltip title={`${image.likes} likes`} arrow>
          <IconButton aria-label="add to favorites">
            <LikeButton likesCount={image.likesCount} sounds={sounds} />
          </IconButton>
        </Tooltip>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Tooltip title={`Comments - ${commentCount}`} arrow>
          <IconButton onClick={() => onImageClick(image)}>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
