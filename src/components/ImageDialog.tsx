import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const ImageDialog = ({ open, onClose, image, comment }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        width: 1000,
        height: 1000,
        position: "absolute",
        left: "23.5%",
      }}
    >
      <DialogContent>
        <img
          src={image}
          alt="Selected Image"
          style={{ width: "100%", height: "auto" }}
        />
        <Typography>{comment}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
