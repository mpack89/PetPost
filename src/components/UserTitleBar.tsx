import { ImageListItemBar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import getCommentsData from "./getCommentsData";

const UserTitleBar = () => {
  const { comments } = getCommentsData();
  const userAvatar = comments.length > 0 ? comments[0].avatar : "";
  const userName = comments.length > 0 ? comments[0].user_name : "";

  return (
    <ImageListItemBar
      sx={{ width: 16, height: 16, margin: 2 }}
      title=""
      subtitle=""
      position="top"
      actionIcon={
        <div style={{ display: "flex", flexDirection: "row", padding: 2 }}>
          <div style={{ marginLeft: 10 }} title="UserAvatar">
            <Avatar src={userAvatar} />
          </div>
          <div style={{ marginLeft: 10 }}>
            <Typography>{userName}</Typography>
          </div>
        </div>
      }
      actionPosition="left"
    />
  );
};

export default UserTitleBar;
