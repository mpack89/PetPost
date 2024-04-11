import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface AddCommentFormProps {
  onAddComment: (commentText: string) => void;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    if (commentText.trim() !== '') {
      onAddComment(commentText);
      setCommentText(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={9.7}>
          <TextField
            label="Add a comment..."
            variant="outlined"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            fullWidth
            sx={{
              marginLeft: '20px',
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type="submit" 
            variant="contained"
            color="primary"
            size="small"
          >
            Post
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddCommentForm;