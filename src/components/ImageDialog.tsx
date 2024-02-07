import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import { Grid, IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import getCommentsData from "./getCommentsData";
import CommentItem from "./CommentsItem";
import AddCommentForm from "./AddCommentForm";
import data from "./../components/photodata.json";
import Comment from "./CommentTypes";
import Photo from "./Phototypes";
interface ImageDialogProps {
  imageSrc: string;
  open: any;
  onClose: any;
}

const ImageDialog: React.FC<ImageDialogProps> = ({
  imageSrc,
  open,
  onClose,
}) => {
  const { comments, error } = getCommentsData();
  const [filteredComments, setFilteredComments] = useState<Comment[]>([]);

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

      <DialogContent style={{ height: "800px" }}>
        <Grid container spacing={2} style={{ maxWidth: "lg" }}>
          <Grid item xs={8} md={6}>
            <div
              style={{
                height: "800px",
                overflow: "hidden",
              }}
            >
              <img
                src={imageSrc}
                alt="Selected Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Grid>

          <Grid
            item
            container
            xs={12}
            md={6}
            direction="column"
            style={{
              position: "relative",
              overflowY: "auto",
              height: "800px",
            }}
          >
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
                />
              ))}
            </List>
          </Grid>
        </Grid>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "50%",
            marginBottom: "16px",
            paddingTop: "16px",
            backgroundColor: "#ffffff",
          }}
        >
          <AddCommentForm onAddComment={null} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
