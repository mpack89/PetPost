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
        <Box sx={{ p: 3 }}>
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
        <Stack direction="row" spacing={4}>
          <Stack direction="column" spacing={4}>
            <Avatar
              alt="Mike Pack"
              src="src/images/casey.jpg"
              sx={{ width: 122, height: 122, alignContent: "center" }}
            />
            <Typography textAlign={"center"}>Casey</Typography>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Button
              onClick={handleClickOpen}
              variant="outlined"
              sx={{
                borderRadius: 2,
                background: "lightGrey",
                borderColor: "black",
                color: "black",
                padding: 2,
                textTransform: "none",
                maxHeight: 2,
              }}
            >
              Edit Profile
            </Button>
            <Dialog open={isEditing}>
              <DialogContent>{ProfileForm()}</DialogContent>
            </Dialog>

            <Button
              variant="outlined"
              sx={{
                borderRadius: 2,
                background: "lightGrey",
                borderColor: "black",
                color: "black",
                padding: 2,
                textTransform: "none",
                maxHeight: 2,
              }}
            >
              Settings
            </Button>

            <Typography textAlign={"center"}>Owner: Mike Pack</Typography>
            <Typography textAlign={"center"}>
              NL resident. Love the Outdoors
            </Typography>
            <Typography textAlign={"center"}>
              Posts Followers Following
            </Typography>
          </Stack>
        </Stack>
        <Box sx={{ width: "100%" }}>
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
