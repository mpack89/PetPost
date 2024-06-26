import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import { IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import CommentIcon from "@mui/icons-material/Comment";
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

const ImageDialog: React.FC<ImageDialogProps> = ({
  imageSrc,
  open,
  onClose,
  sounds,
}) => {
  const { comments: initialComments, error } = getCommentsData();
  const [comments, setComments] = useState<Comment[]>([]);
  const [filteredComments, setFilteredComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const { width } = useWindowSize();

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
      {!(width < 600 && showComments) && (
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 0,
            right: 12,
            zIndex: 1,
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}

      <DialogContent
        style={{
          height: "800px",
          overflowY: "auto",
          display: "flex",
          flexDirection: width < 600 ? "column" : "row",
        }}
      >
        {width < 600 && !showComments ? (
          <>
            <img
              src={imageSrc}
              alt="Selected Image"
              style={{ width: "100%", height: "800px", objectFit: "cover" }}
            />
            <IconButton
              style={{
                position: "absolute",
                zIndex: 1,
                bottom: 20,
                right: 20,
              }}
              onClick={() => setShowComments(true)}
            >
              <CommentIcon fontSize="large" />
            </IconButton>
          </>
        ) : width < 600 && showComments ? (
          <>
            <List sx={{ width: "100%", height: "800px", overflowY: "auto", marginBottom: "14%" }}>
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
                  bottom: 10,
                  width: "100%",
                  background: "#ffffff",
                  right: 10,
                  padding: 4
                  
                }}
              >
            <AddCommentForm onAddComment={handleAddComment} />
            </div>
            <IconButton
              style={{
                position: "fixed",
                top: 30,
                right: 30,
              }}
              onClick={() => setShowComments(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        ) : (
          <>
            <div style={{ width: "50%" }}>
              <img
                src={imageSrc}
                alt="Selected Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{ width: "50%", overflowY: "auto", overflowX: "hidden" }}
            >
              <div></div>
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
                  width: "44%",
                  background: "#ffffff",
                  right: "6%",
                  padding: 0
                  
                }}
              >
                <AddCommentForm onAddComment={handleAddComment} />
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
