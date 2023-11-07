import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import data from "../../components/photodata.json";
import ImageDialog from "../ImageDialog";
import { useState } from "react";

export default function ProfilePhotos() {
  const image = data.photos;
  const imagesToRender = image.filter((image) => image.page === "profile");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);

    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {imagesToRender.map((image) => (
          <ImageListItem
            onClick={() => handleImageClick(image.url)}
            key={image.id}
          >
            <img src={image.url} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        image={selectedImage}
        comment={}
      />
    </div>
  );
}
