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
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Grid item xs={9}>
        <TextField
          label="Add a comment..."
          variant="outlined"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          fullWidth
          sx={{
            marginLeft: "20px",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          size="small"
        >
          Post
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddCommentForm;
