import { ImageListItemBar } from "@mui/material";
import LikeButton from "./components/LikeButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const CustomImageListItemBar = ({ onCommentClick }) => {
  return (
    <ImageListItemBar
      sx={{ width: 16, height: 16, margin: 1 }}
      title=""
      subtitle=""
      position="below"
      actionIcon={
        <div style={{ display: "flex", flexDirection: "row", padding: 2 }}>
          <div style={{ marginRight: 0 }} title="Like">
            <LikeButton onClick={null} likesCount={null} />
          </div>
          <div style={{ marginLeft: 10 }} title="Comment">
            <ChatBubbleOutlineIcon onClick={onCommentClick} fontSize="small" />
          </div>
          <div style={{ marginLeft: 10 }} title="Share">
            <ShareOutlinedIcon fontSize="small" />
          </div>
        </div>
      }
      actionPosition="left"
    />
  );
};

export default CustomImageListItemBar;
