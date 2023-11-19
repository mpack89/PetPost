import React from "react";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

interface CommentItemProps {
  user_name: string;
  comment_text: string;
  comment_date: string;
  likes: number;
}

const CommentItem: React.FC<CommentItemProps> = ({
  user_name,
  comment_text,
  comment_date,
  likes,
}) => (
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
            {user_name}
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
              {comment_text}
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
                {comment_date}
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
);

export default CommentItem;
