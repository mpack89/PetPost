import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { getMyCommentsByImage } from "../API/commentsAPI";

const ImageDialog = ({ open, onClose, imageSrc }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    let data = getMyCommentsByImage();
    setComments(data);
  }, []);

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
          src={imageSrc}
          alt="Selected Image"
          style={{ width: "100%", height: "auto" }}
        />
        <Typography>{comments}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
