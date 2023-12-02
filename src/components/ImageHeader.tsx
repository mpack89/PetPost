import React from "react";
import UserTitleBar from "../UserTitleBar";
import { Avatar, Typography } from "@mui/material";

const ImageHeader = ({ user, avatar }) => {
  return (
    <div>
      <div
        style={{
          textAlign: "left",
          marginTop: 2,
          display: "flex",
          flexDirection: "row",
          padding: 2,
        }}
      >
        <Avatar sizes="small">{avatar}</Avatar>
        <Typography>{user}</Typography>
      </div>
    </div>
  );
};

export default ImageHeader;
