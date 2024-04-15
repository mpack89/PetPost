import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Tooltip from "@mui/material/Tooltip";
import LikeButton from "./LikeButton"; 
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


const CardComponent = ({ image, onImageClick, onImageHover, sounds }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch comment data from localStorage
    const fetchComments = () => {
      const commentData = localStorage.getItem("comments");
      if (commentData) {
        const commentArray = JSON.parse(commentData);
        const commentsForImage = commentArray.filter(
          (comment) => comment.photo_id === image.id
        );
        setComments(commentsForImage);
      }
      setIsLoading(false); // Set loading to false after fetching data
    };

    fetchComments();
  }, [image.id]); // Depend on image.id to refetch when it changes

  const commentCount = comments.length;

  let firstCommentText = "";
  if (commentCount > 0) {
    const words = comments[0].comment_text.split(" ");
    firstCommentText = words.slice(0, 5).join(" ") + (words.length > 5 ? "..." : "");
  }

  const firstCommentUser = commentCount > 0 ? comments[0].user_name : "";

  if (isLoading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      >
        <CircularProgress disableShrink />
      </Box>
    );
  }

  return (
    <Card
      sx={{
        width: 400,
        height: 630,
        margin: 2,
        color: "black",
        borderColor: "black",
        padding: 1,
        borderWidth: "50px",
      }}
    >
      <CardHeader
        titleTypographyProps={{
          fontSize: 16,
          fontFamily: "revert",
          fontWeight: 500,
        }}
        avatar={<Avatar src={image.avatar} />}
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
        onMouseEnter={() => onImageHover(image.url)}
      />

      <CardActions disableSpacing>
        <Tooltip title={`${image.likes} likes`} arrow>
          <IconButton
            aria-label="add to favorites"
            style={{ background: "transparent", border: "none" }}
          >
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
        <IconButton
          aria-label="share"
          style={{ background: "transparent", border: "none" }}
        >
          <ShareIcon />
        </IconButton>
        <Tooltip
          title={`${commentCount} Comments - ${firstCommentUser}:${firstCommentText}`}
          arrow
        >
          <IconButton
            onClick={() => onImageClick(image.url)}
            style={{ background: "transparent", border: "none" }}
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
