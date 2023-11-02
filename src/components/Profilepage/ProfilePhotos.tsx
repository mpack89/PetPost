import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "./profilephotodata.json";

export default function ProfilePhotos() {
  const image = data.userprofilephotos;

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {image.map((image) => (
        <ImageListItem key={image.url}>
          <img src={image.url} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
