import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import { Grid, IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import getCommentsData from "./getCommentsData";
import CommentItem from "./CommentsItem";
import AddCommentForm from "./AddCommentForm";
import data from "./../components/photodata.json";

interface ImageDialogProps {
  imageSrc: string;
  open: any;
  onClose: any;
}

interface Comment {
  user_name: string;
  comment_text: string;
  comment_date: string;
  likes: number;
  photo_id: number;
}

interface Photo {
  id: number;
  url: string;
  page: string;
  user: string;
  avatar: string;
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

    const commentsForImage = comments.filter(
      (comment: Comment) => comment.photo_id === photo?.id
    );

    setFilteredComments(commentsForImage);
  }, [imageSrc, comments, error]);

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
          right: "40px",
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        <Grid container spacing={2} style={{ maxWidth: "lg" }}>
          <Grid item xs={8} md={6}>
            <img
              src={imageSrc}
              alt="Selected Image"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            direction="column"
            style={{ position: "relative" }}
          >
            <List sx={{ width: "100%", maxWidth: 600, marginBottom: 10 }}>
              {filteredComments.map((comment, index) => (
                <CommentItem key={index} {...comment} />
              ))}
            </List>
            <Grid
              item
              style={{
                position: "absolute",
                bottom: 0,
                marginTop: 20,
                width: "100%",
              }}
            >
              <AddCommentForm onAddComment={null} />
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
