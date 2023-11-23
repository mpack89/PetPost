import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import React from "react";

interface Props {
  onClick: () => void;
}
const LikeButton = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
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
