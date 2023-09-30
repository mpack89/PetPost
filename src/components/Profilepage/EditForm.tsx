import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack, Typography } from "@mui/material";

export default function FormDialog() {
  return (
    <div>
      <DialogContent sx={{ width: 400, height: 400 }}>
        <DialogTitle sx={{ textAlign: "center" }}>Edit Profile</DialogTitle>
        <Stack direction="column" spacing={4}>
          <Typography textAlign="center">Change Profile Photo</Typography>
          <Stack direction="row" spacing={2}>
            <DialogContentText sx={{ padding: 0 }}>Owner</DialogContentText>
            <TextField
              className="editProfile"
              autoFocus
              margin="normal"
              id="name"
              label=""
              type="string"
              size="small"
              variant="outlined"
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <DialogContentText sx={{ padding: 0 }}>Pet</DialogContentText>
            <TextField
              className="editProfile"
              autoFocus
              margin="normal"
              id="name"
              label=""
              type="string"
              size="small"
              variant="outlined"
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <DialogContentText sx={{ padding: 0 }}>Bio</DialogContentText>
            <TextField
              className="editProfile"
              autoFocus
              margin="dense"
              id="name"
              label=""
              type="string"
              size="medium"
              variant="outlined"
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <DialogContentText sx={{ padding: 0 }}>Links</DialogContentText>
            <TextField
              className="editProfile"
              autoFocus
              margin="dense"
              id="name"
              label=""
              type="string"
              size="small"
              variant="outlined"
            />
          </Stack>
        </Stack>
      </DialogContent>
    </div>
  );
}
