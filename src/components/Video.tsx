import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import data from "./photodata.json";

export function Video(props) {
  const images = data.photos;

  return (
    <Carousel>
      {images.map((image, i) => (
        <Item key={i} image={image} />
      ))}
    </Carousel>
  );
}

export function Item({ image }) {
  return (
    <Paper sx={{ width: 400, height: 630, margin: 2, color: "black" }}>
      <img
        style={{ width: "100%", height: "100%" }}
        src={image.url}
        alt={image.name}
      />
      <h2>{image.name}</h2>
      <p>{image.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
