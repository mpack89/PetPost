import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

interface Props {
  onClick: any;
  likesCount: number;
  commentId: number;
}

const LikeButton = ({ onClick, likesCount, commentId }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  const handleLikeClick = () => {
    const updatedLikesCount = status ? likesCount + 1 : likesCount - 1;

    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

    const updatedComments = storedComments.map((comment) => {
      if (comment.comment_id === commentId) {
        return { ...comment, likes: updatedLikesCount };
      }
      return comment;
    });

    localStorage.setItem("comments", JSON.stringify(updatedComments));

    toggle();
  };

  if (status) {
    return (
      <FavoriteBorderIcon
        style={{ marginLeft: "auto" }}
        fontSize="medium"
        onClick={handleLikeClick}
      />
    );
  }

  return (
    <FavoriteIcon
      style={{ marginLeft: "auto" }}
      fontSize="medium"
      sx={{ color: "#fc0fc0" }}
      onClick={handleLikeClick}
    />
  );
};

export default LikeButton;
