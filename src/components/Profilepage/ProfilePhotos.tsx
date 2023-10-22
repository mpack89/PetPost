import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "./profilephotodata.json";
import { useState } from "react";

export default function ProfilePhotos() {
  const [image, setImage] = useState(data.userprofilephotos);

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {image.map((image) => (
        <ImageListItem key={image.url}>
          <img
            srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
