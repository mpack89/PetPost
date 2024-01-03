import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import data from "./photodata.json";

export function Video(autoplay: false) {
  const images = data.photos;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        overflowY: "auto",
        width: 800,
      }}
    >
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        animation="slide"
      >
        {images.map((image, i) => (
          <Item key={i} image={image} />
        ))}
      </Carousel>
    </div>
  );
}

export function Item({ image }) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: 600, height: 600 }}
        src={image.url}
        alt={image.name}
      />
      <h2>{image.user}</h2>
      <p>{image.description}</p>
    </Paper>
  );
}
