import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Button, TextField } from "@mui/material";

const ImageWithDialog = ({ imageSrc, initialComments = [] }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const addComment = () => {
    setComments((initialComments) => [...prevComments, newComment]);
    setNewComment("");
  };

  return (
    <div>
      <img
        src={imageSrc}
        alt={altText}
        onClick={handleDialogOpen}
        style={{ cursor: "pointer" }}
      />

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogContent>
          <img src={imageSrc} alt={altText} style={{ maxWidth: "100%" }} />

          <div>
            {comments.map((comment, index) => (
              <div key={index}>{comment}</div>
            ))}
          </div>

          <TextField
            label="Add a Comment"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={handleCommentChange}
          />

          <Button variant="contained" color="primary" onClick={addComment}>
            Add Comment
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageWithDialog;
