import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "30%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={4}>
          <Avatar
            alt="Mike Pack"
            src="src/images/mikke.jpg"
            sx={{ width: 122, height: 122, alignContent: "center" }}
          />
          <Typography textAlign={"center"}>Mike Pack</Typography>
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="navigation tab"
            >
              <Tab label="Posts" {...a11yProps(0)} />
              <Tab label="About" {...a11yProps(1)} />
              <Tab label="Friends" {...a11yProps(2)} />
              <Tab label="Photos" {...a11yProps(3)} />
              <Tab label="Videos" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Posts
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            About
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Friends
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Photo
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Videos
          </CustomTabPanel>
        </Box>
      </Stack>
    </div>
  );
}
