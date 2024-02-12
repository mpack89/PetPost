import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface AddCommentFormProps {
  onAddComment: (commentText: string) => void;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      onAddComment(commentText);
      setCommentText(""); // Clear input field
    }
  };

  return (
    <div>
      <TextField
        label="Add Comment"
        multiline
        fullWidth
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        sx={{
          marginLeft: "10px",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddComment}
        style={{ marginTop: "8px" }}
      >
        Post
      </Button>
    </div>
  );
};

export default AddCommentForm;
