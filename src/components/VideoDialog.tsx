import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import { IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import CommentItem from "./CommentsItem";
import AddCommentForm from "./AddCommentForm";
import data from "./photodata.json";
import Comment from "../types/CommentTypes";
import Photo from "../types/Phototypes";

interface VideoDialogProps {
  imageSrc: string;
  open: any;
  onClose: any;
  sounds: any;
}

const VideoDialog: React.FC<VideoDialogProps> = ({
  imageSrc,
  open,
  onClose,
  sounds,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [filteredComments, setFilteredComments] = useState<Comment[]>([]);

  function useWindowSize() {
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const resizeListener = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener("resize", resizeListener);

      return () => {
        window.removeEventListener("resize", resizeListener);
      };
    }, []);

    return size;
  }
  console.log("Not Mobile", open);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(storedComments);
    filterComments(imageSrc, storedComments);
  }, [imageSrc]);

  const filterComments = (imageSrc: string, comments: Comment[]) => {
    const currentPhoto = data.photos.find(
      (photo: Photo) => photo.url === imageSrc
    );

    const commentsForImage = comments.filter(
      (comment: Comment) => comment.photo_id === currentPhoto?.id
    );

    setFilteredComments(commentsForImage);
  };

  const { width } = useWindowSize();

  const handleUpdateComments = (updatedComments: Comment[]) => {
    setComments(updatedComments);
    filterComments(imageSrc, updatedComments);
  };

  const handleAddComment = (commentText: string) => {
    const currentPhoto = data.photos.find(
      (photo: Photo) => photo.url === imageSrc
    );

    if (currentPhoto) {
      const newComment: Comment = {
        user_name: "New User",
        comment_text: commentText,
        comment_date: new Date().toLocaleString(),
        likes: 0,
        photo_id: currentPhoto.id,
        comment_id: comments.length + 1,
      };

      const updatedComments = [...comments, newComment];
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      handleUpdateComments(updatedComments);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <IconButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{
          position: "absolute",
          top: "8px",
          right: "60px",
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        style={{
          height: "800px",
          overflowY: "auto",
          display: "flex",
          flexDirection: width < 600 ? "column" : "row",
        }}
      >
        {!(width < 600) && (
          <div style={{ width: "50%" }}>
            <img
              src={imageSrc}
              alt="Selected Image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
        <div style={{ width: width < 600 ? "100%" : "50%", overflowY: "auto" }}>
          <List sx={{ width: "100%", maxWidth: 600, marginBottom: 10 }}>
            {filteredComments.map((comment, index) => (
              <CommentItem
                key={index}
                user_name={comment.user_name}
                comment_text={comment.comment_text}
                comment_date={comment.comment_date}
                likes={comment.likes}
                comment_id={comment.comment_id}
                updateComments={handleUpdateComments}
                sounds={sounds}
              />
            ))}
          </List>
          <div
            style={{
              position: "absolute",
              bottom: 18,
              right: "6%",
              width: width < 600 ? "94%" : "44%",
              background: "#ffffff",
            }}
          >
            <AddCommentForm onAddComment={handleAddComment} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
