import React from "react";

const PhotoData = () => {
  const photoData = localStorage.getItem("PHOTO_DATA");
  const image = JSON.parse(photoData);

  return image;
};

export default PhotoData;
