import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const ImageDialog = ({ open, onClose, image, comment }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <img src={image} alt="Selected Image" />
        <Typography>{comment}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
