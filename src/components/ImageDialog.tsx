import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { getMyCommentsByImage } from "../API/commentsAPI";

interface imageDialogProps {
  imageSrc: string;
  open: any;
  onClose: any;
}

const ImageDialog = (props: imageDialogProps) => {
  const { imageSrc, open, onClose } = props;
  const [commentsToShow, setCommentsToShow] = useState(null);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyCommentsByImage();
        setCommentsToShow(data.comment_text);
        setUsername(data.user_name);
      } catch (error) {}
    };

    fetchData();
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
        <Typography>{commentsToShow}</Typography>
        <Typography>{username}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
