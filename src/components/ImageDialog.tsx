import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState, useEffect } from "react";
import { getMyCommentsByImage } from "../API/commentsAPI";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Grid, Paper, Typography } from "@mui/material";

interface imageDialogProps {
  imageSrc: string;
  open: any;
  onClose: any;
}

const ImageDialog = (props: imageDialogProps) => {
  const { imageSrc, open, onClose } = props;
  const [commentsToShow, setCommentsToShow] = useState(null);
  const [username, setUsername] = useState(null);
  const [date, setDate] = useState(null);
  const [likes, setLikes] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyCommentsByImage();
        setCommentsToShow(data.comment_text);
        setUsername(data.user_name);
        setDate(data.comment_date);
        setLikes(data.likes);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
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
              <ListItem>
                <ListItemText
                  style={{ display: "flex", alignItems: "center" }}
                  primary={
                    <Typography
                      marginRight={6}
                      variant="body1"
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      {username}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      {commentsToShow}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderSpacing: 2,
                  }}
                  primary={
                    <Typography
                      marginRight={6}
                      variant="body1"
                      style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      {username}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      style={{
                        fontWeight: "lighter",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      {commentsToShow}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
