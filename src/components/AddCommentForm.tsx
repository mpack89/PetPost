import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";

interface AddCommentFormProps {
  onAddComment: (comment: { user_name: string; comment_text: string }) => void;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ onAddComment }) => {
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (userName.trim() && commentText.trim()) {
      onAddComment({ user_name: userName, comment_text: commentText });
      setUserName("");
      setCommentText("");
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Your Comment"
          variant="outlined"
          fullWidth
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="primary" onClick={handleAddComment}>
          Add Comment
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddCommentForm;
