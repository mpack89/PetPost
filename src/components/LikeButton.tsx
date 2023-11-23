import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import React from "react";

interface Props {
  onClick: any;
  likesCount: number;
}
const LikeButton = ({ onClick, likesCount }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    status ? likesCount++ : likesCount--;
    onClick();
  };
  if (status)
    return (
      <FavoriteBorderIcon
        style={{ marginLeft: "auto" }}
        fontSize="small"
        onClick={toggle}
      />
    );
  return (
    <FavoriteIcon
      style={{ marginLeft: "auto" }}
      fontSize="small"
      sx={{ color: "#fc0fc0" }}
      onClick={toggle}
    />
  );
};

export default LikeButton;
