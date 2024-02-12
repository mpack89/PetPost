import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

interface AddCommentFormProps {
  onAddComment: (commentText: string) => void;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      onAddComment(commentText);
      setCommentText("");
    }
  };
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item xs={9.7}>
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
