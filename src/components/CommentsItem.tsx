import React from "react";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import LikeButton from "./LikeButton";

interface Comment {
  user_name: string;
  comment_text: string;
  comment_date: string;
  likes: number;
  photo_id: number;
  comment_id: number;
}
//hello
interface CommentItemProps {
  user_name: string;
  comment_text: string;
  comment_date: string;
  likes: number;
  comment_id: number;
  updateComments: (updatedComments: Comment[]) => void;
}

const CommentItem: React.FC<CommentItemProps> = ({
  user_name,
  comment_text,
  comment_date,
  likes,
  comment_id,
  updateComments,
}) => {
  return (
    <Paper
      style={{
        margin: "20px",
        width: "80%",
        backgroundColor: "#f0f8ff",
        borderRadius: "6px",
      }}
    >
      <ListItem>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Typography
            variant="body1"
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "black",
              marginBottom: 4,
            }}
          >
            {user_name}
          </Typography>
          <Typography
            style={{
              fontWeight: "lighter",
              fontSize: "14px",
              color: "black",
              marginBottom: 8,
            }}
          >
            {comment_text}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                fontWeight: "lighter",
                fontSize: "12px",
                color: "grey",
                marginRight: 12,
              }}
            >
              {comment_date}
            </Typography>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "grey",
                marginRight: 12,
              }}
            >
              {likes} Likes
            </Typography>
            <Typography
              style={{ fontWeight: "lighter", fontSize: "12px", color: "grey" }}
            >
              Reply
            </Typography>
            <LikeButton
              onClick={() => console.log("clicked")}
              likesCount={likes}
              commentId={comment_id}
              updateComments={updateComments}
            />
          </div>
        </div>
      </ListItem>
    </Paper>
  );
};

export default CommentItem;
