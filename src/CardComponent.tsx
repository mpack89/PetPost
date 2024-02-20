import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import LikeButton from "./components/LikeButton";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Tooltip from "@mui/material/Tooltip";

const CardComponent = ({ image, onImageClick }) => {
  return (
    <Card
      sx={{
        width: 400,
        height: 630,
        margin: 2,
        color: "black",
        borderColor: "black",
        padding: 4,
        borderWidth: "50px",
      }}
    >
      <CardHeader
        titleTypographyProps={{
          fontSize: 16,
          fontFamily: "revert",
          fontWeight: 500,
        }}
        avatar={<Avatar src={image.avatar} />}
        title={image.user}
        subheader=""
      />

      <img
        src={image.url}
        style={{
          borderRadius: 4,
          width: 400,
          height: 500,
        }}
        alt={image.user}
      />

      <CardActions disableSpacing>
        <Tooltip title={`${image.likes} likes`} arrow>
          <IconButton
            aria-label="add to favorites"
            style={{ background: "transparent", border: "none" }}
          >
            <LikeButton
              onClick={() => console.log("clicked")}
              likesCount={image.likesCount}
            />
          </IconButton>
        </Tooltip>
        <IconButton
          aria-label="share"
          style={{ background: "transparent", border: "none" }}
        >
          <ShareIcon />
        </IconButton>
        <Tooltip title={`${"2"} comments`} arrow>
          <IconButton
            onClick={() => onImageClick(image.url)}
            style={{ background: "transparent", border: "none" }}
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
