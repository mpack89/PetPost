import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
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
      }}
    >
      <Carousel autoPlay={false}>
        {images.map((image, i) => (
          <Item key={i} image={image} />
        ))}
      </Carousel>
    </div>
  );
}

export function Item({ image }) {
  return (
    <Paper sx={{ width: 400, height: 630, margin: 2, color: "black" }}>
      <img
        style={{ width: "100%", height: "80%" }}
        src={image.url}
        alt={image.name}
      />
      <h2>{image.user}</h2>
      <p>{image.description}</p>

      <Button></Button>
    </Paper>
  );
}
