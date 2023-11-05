import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../components/photodata.json";

export default function ProfilePhotos() {
  const image = data.photos;
  const imagesToRender = image.filter((image) => image.page === "profile");
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {imagesToRender.map((image) => (
        <ImageListItem key={image.id}>
          <img src={image.url} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
