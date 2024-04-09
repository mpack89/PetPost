import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Comment from "../types/CommentTypes";

interface Props {
  onClick?: any;
  likesCount: number;
  photoId?: number;
  commentId?: number;
  updatePhotos?: (updatedPhotos: any[]) => void;
  updateComments?: (updatedComments: Comment[]) => void;
  sounds: any;
}

const LikeButton = ({
  onClick,
  likesCount,
  photoId,
  sounds,
  commentId,
  updatePhotos,
  updateComments,
}: Props) => {
  const [status, setStatus] = useState(true);

  const soundPaths = [
    "src/sounds/cat.mp3",
    "src/sounds/chicken.mp3",
    "src/sounds/cow.mp3",
    "src/sounds/dog.mp3",
  ];
  

let currentSoundIndex = parseInt(localStorage.getItem("currentSoundIndex") || "0");

const playSound = () => {
  if (sounds) {
    const audio = new Audio(soundPaths[currentSoundIndex]);
    audio.play()
      .catch((error) => console.error("Error playing the sound:", error));
    currentSoundIndex = (currentSoundIndex + 1) % soundPaths.length;
    // Store the updated currentSoundIndex in localStorage
    localStorage.setItem("currentSoundIndex", currentSoundIndex.toString());
  }
};
  const toggle = () => {
    setStatus(!status);
  };

  const handleLikeClick = () => {
    toggle();
    playSound();

    const updatedLikesCount = status ? likesCount + 1 : likesCount - 1;

    if (updatePhotos && typeof updatePhotos === "function") {
      const storedPhotos = JSON.parse(localStorage.getItem("PHOTO_DATA")) || [];

      const updatedPhotos = storedPhotos.map((photo: any) => {
        if (photo.id === photoId) {
          return { ...photo, likes: updatedLikesCount };
        }
        return photo;
      });

      localStorage.setItem("PHOTO_DATA", JSON.stringify(updatedPhotos));

      updatePhotos(updatedPhotos);
    } else {
      console.log("updatePhotos not provided or not a function");
    }

    if (updateComments && typeof updateComments === "function") {
      const storedComments = JSON.parse(localStorage.getItem("comments")) || [];

      const updatedComments = storedComments.map((comment: Comment) => {
        if (comment.comment_id === commentId) {
          return { ...comment, likes: updatedLikesCount };
        }
        return comment;
      });

      localStorage.setItem("comments", JSON.stringify(updatedComments));

      updateComments(updatedComments);
    } else {
      console.log("updateComments not provided or not a function");
    }
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
