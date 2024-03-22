import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import { Grid, IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import CommentItem from "./CommentsItem";
import AddCommentForm from "./AddCommentForm";
import data from "./../components/photodata.json";
import Comment from "../types/CommentTypes";
import Photo from "../types/Phototypes";
import getCommentsData from "./getCommentsData";

interface ImageDialogProps {
  imageSrc: string;
  open: any;
  onClose: any;
  sounds: any;
}

const ImageDialog: React.FC<ImageDialogProps> = ({
  imageSrc,
  open,
  onClose,
  sounds,
}) => {
  const { comments: initialComments, error } = getCommentsData();
  const [comments, setComments] = useState<Comment[]>([]);
  const [filteredComments, setFilteredComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (initialComments.length > 0) {
      setComments(initialComments);
      setFilteredComments(initialComments);
    }
  }, [initialComments]);

  useEffect(() => {
    const photo = data.photos.find((photo: Photo) => photo.url === imageSrc);

    if (photo) {
      const commentsForImage = comments.filter(
        (comment: Comment) => comment.photo_id === photo.id
      );

      setFilteredComments(commentsForImage);
    }
  }, [imageSrc, comments, error]);

  const handleUpdateComments = (updatedComments: Comment[]) => {
    const currentPhoto = data.photos.find(
      (photo: Photo) => photo.url === imageSrc
    );

    const commentsForImage = updatedComments.filter(
      (comment: Comment) => comment.photo_id === currentPhoto?.id
    );

    setFilteredComments(commentsForImage);
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
      setComments(updatedComments);

      handleUpdateComments(updatedComments);

      localStorage.setItem("comments", JSON.stringify(updatedComments));
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
  
    <DialogContent style={{ height: "800px", overflowY: "auto", display: "flex" }}>
      <div style={{ width: "50%" }}> 
        <img
          src={imageSrc}
          alt="Selected Image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ width: "50%", overflowY: "auto" }}> 
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
        <div style={{ position: "absolute", bottom: 2, right: 0, width: "50%", background: "#ffffff" }}> 
          <AddCommentForm onAddComment={handleAddComment} />
        </div>
      </div>
    </DialogContent>
  </Dialog>
  );
};

export default ImageDialog;
