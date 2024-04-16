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
import { getMyProfile } from "../../API/profileAPI";
import Grid from "@mui/material/Grid";
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
  const [isEditing, setisEditing] = React.useState(false);
  const info = getMyProfile();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setisEditing(true);
  };

  const handleClose = () => {
    setisEditing(false);
  };

  return (
    <div>
      <Grid
        container
        sx={{
          
          padding: "4%",
          marginTop: 0
          
         
        }}
        alignItems={"center"}
        direction="column"
        spacing={2}
        justifyContent={"center"}
      >
        <Grid item container direction="row" spacing={0} justifyContent="center" >
          <Grid item xs={6} md={6}>
            <Avatar
              alt="Mike Pack"
              src="src/images/casey.jpg"
              sx={{ width: 140, height: 140}}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                sx={{
                  background: "lightGrey",
                  color: "black",
                  padding: 2,
                  textTransform: "none",
                  marginBottom: 2,
                  
                  
                }}
              >
                Edit Profile
              </Button>
              <Dialog open={isEditing}>
                <DialogActions>
                  <IconButton onClick={handleClose}>X</IconButton>
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
                  marginBottom: 2,
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
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTabPanel value={value} index={0}>
            {ProfilePhotos()}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Liked
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Tagged
          </CustomTabPanel>
        </Grid>
      </Grid>
    </div>
  );
}