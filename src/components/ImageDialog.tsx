import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import { Grid, IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import useCommentsData from "./useCommentsData";
import CommentItem from "./CommentsItem";

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
  const { comments, loading, error } = useCommentsData();

  useEffect(() => {}, [loading, error]);

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
          <Grid item xs={12} md={6}>
            <List sx={{ width: "100%", maxWidth: 600 }}>
              {comments.map((comment, index) => (
                <CommentItem key={index} {...comment} />
              ))}
            </List>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
