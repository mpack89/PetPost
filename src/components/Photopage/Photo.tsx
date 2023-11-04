import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../components/photodata.json";

export default function WovenImageList() {
  const image = data.photos;
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "44%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <ImageList
        sx={{ width: 1200, height: 800, marginTop: 25 }}
        variant="woven"
        cols={4}
        gap={8}
      >
        {image.map((image) => (
          <ImageListItem key={image.url}>
            <img src={image.url} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
