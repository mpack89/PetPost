import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const ImageDialog = ({ open, onClose, image }) => {
  return (
    <Dialog open={open} onClose={onClose} sx={{ width: 1000, height: 1000 }}>
      <DialogContent>
        <img
          src={image}
          alt="Selected Image"
          style={{ width: "100%", height: "auto" }}
        />
        <Typography></Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
