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

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div>
      <img
        src={imageSrc}
        onClick={handleDialogOpen}
        style={{ cursor: "pointer" }}
      />

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogContent>
          <img src={imageSrc} style={{ maxWidth: "100%" }} />

          <div>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>

          <TextField
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
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
