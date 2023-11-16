import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState, useEffect } from "react";
import { getMyCommentsByImage } from "../API/commentsAPI";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";

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
              <Paper
                style={{
                  margin: "20px",
                  width: "80%",
                  maxWidth: "none",
                  backgroundColor: "#E6E6E3",
                  borderRadius: "6px",
                }}
              >
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
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          style={{
                            fontWeight: "lighter",
                            fontSize: "14px",
                            color: "black",
                          }}
                        >
                          {commentsToShow}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <Typography
                            style={{
                              fontWeight: "lighter",
                              fontSize: "12px",
                              color: "grey",
                              marginRight: 12,
                              marginTop: 10,
                            }}
                          >
                            {date}
                          </Typography>
                          <Typography
                            style={{
                              fontWeight: "bold",
                              fontSize: "12px",
                              color: "grey",
                              marginTop: 10,
                            }}
                          >
                            {likes} Likes
                          </Typography>
                        </div>
                      </div>
                    }
                  />
                </ListItem>
              </Paper>
              <Paper
                style={{
                  margin: "20px",
                  width: "80%",
                  maxWidth: "none",
                  backgroundColor: "#E6E6E3",
                  borderRadius: "6px",
                }}
              >
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
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          style={{
                            fontWeight: "lighter",
                            fontSize: "14px",
                            color: "black",
                          }}
                        >
                          {commentsToShow}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <Typography
                            style={{
                              fontWeight: "lighter",
                              fontSize: "12px",
                              color: "grey",
                              marginRight: 12,
                              marginTop: 10,
                            }}
                          >
                            {date}
                          </Typography>
                          <Typography
                            style={{
                              fontWeight: "bold",
                              fontSize: "12px",
                              color: "grey",
                              marginTop: 10,
                            }}
                          >
                            {likes} Likes
                          </Typography>
                        </div>
                      </div>
                    }
                  />
                </ListItem>
              </Paper>
            </List>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
