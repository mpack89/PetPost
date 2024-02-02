import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ProfilePhotos from "./ProfilePhotos";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProfileForm from "./ProfileForm";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { getMyProfile } from "../../API/profileAPI";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 2,
            height: 500,
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [isEditing, setisEditing] = React.useState(false);

  const handleClickOpen = () => {
    setisEditing(true);
  };
  const handleClose = () => {
    setisEditing(false);
  };

  const info = getMyProfile();

  return (
    <div>
      <Stack
        sx={{
          position: "absolute",
          left: "50%",
          top: "60%",
          transform: "translate(-50%, -50%)",
        }}
        alignItems={"center"}
        direction="column"
        spacing={2}
      >
        <Stack direction="row" spacing={6}>
          <Stack direction="column" spacing={4}>
            <Avatar
              alt="Mike Pack"
              src="src/images/casey.jpg"
              sx={{ width: 140, height: 140, alignContent: "center" }}
            />

            <Stack direction="row" spacing={1}>
              <IconButton
                size="large"
                aria-label="link to facebook"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="link to twitter"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="link to instagram"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1}>
            <Button
              onClick={handleClickOpen}
              variant="contained"
              sx={{
                background: "lightGrey",

                color: "black",
                padding: 2,
                textTransform: "none",
                maxHeight: 2,
              }}
            >
              Edit Profile
            </Button>
            <Dialog open={isEditing}>
              <DialogActions>
                <Button onClick={handleClose}>X</Button>
              </DialogActions>
              <DialogContent>
                <ProfileForm profile={info} setIsEditing={setisEditing} />
              </DialogContent>
            </Dialog>

            <Button
              variant="contained"
              sx={{
                background: "lightGrey",
                color: "black",
                padding: 2,
                textTransform: "none",
                maxHeight: 2,
              }}
            >
              Settings
            </Button>

            <>
              <Typography textAlign={"center"}>Pet:{info?.pet}</Typography>
              <Typography textAlign={"center"}>Human:{info?.owner}</Typography>
              <Typography textAlign={"center"}>Bio:{info?.bio}</Typography>
            </>

            <Typography textAlign={"center"}>
              Posts Followers Following
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="navigation tab"
              centered
            >
              <Tab label="Posts" {...a11yProps(0)} />
              <Tab label="Liked" {...a11yProps(1)} />
              <Tab label="Tagged" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {ProfilePhotos()}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Liked
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Tagged
          </CustomTabPanel>
        </Box>
      </Stack>
    </div>
  );
}
