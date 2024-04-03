import Carousel from "react-material-ui-carousel";
import PhotoData from "./PhotoData";
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
import { Grid } from "@mui/material";
import CardComponent from "../CardComponent";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export function Video({ autoplay, sounds }) {
  const images = PhotoData();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const carouselInterval = 10000;
  const isMobile = useIsMobile();

  const handleImageClickMobile = (image) => {
    setSelectedImage(image);
    setDialogOpen(true);
  };

  const handleImageClick = (image) => {
    setSelectedImageIndex(images.indexOf(image));
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="background-and-carousel">
      {isMobile ? (
        <div className="page-container">
          <Grid container spacing={1} justifyContent={"space-around"}>
            {images.map((image) => (
              <Grid item key={image.id}>
                <CardComponent
                  image={image}
                  onImageClick={handleImageClickMobile}
                  onImageHover={null}
                  sounds={sounds}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <>
          <img
            src={
              images[(selectedImageIndex + images.length - 1) % images.length]
                .url
            }
            className="background-image left"
            alt=""
          />
          <img
            src={images[(selectedImageIndex + 1) % images.length].url}
            className="background-image right"
            alt=""
          />
          <div className="carousel-container">
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
          </div>
        </>
      )}

      <VideoDialog
        imageSrc={images[selectedImageIndex]?.url}
        open={dialogOpen}
        onClose={handleCloseDialog}
        sounds={sounds}
      />
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
        marginLeft: 20,
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
            <LikeButton
              likesCount={image.likes}
              sounds={sounds}
              photoId={image.id}
              updatePhotos={(updatedPhotos) => {
                localStorage.setItem(
                  "PHOTO_DATA",
                  JSON.stringify(updatedPhotos)
                );
              }}
              updateComments={(updatedComments) => {
                localStorage.setItem(
                  "comments",
                  JSON.stringify(updatedComments)
                );
              }}
            />
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
