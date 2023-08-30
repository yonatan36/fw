import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import PersonIcon from "@mui/icons-material/Person";
import LogoDialog from "../LogoDialogs";
import PasswordIcon from "@mui/icons-material/Password";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const ShowUsers = ({ open, onClose }) => {
  const [copiedAdminEmail, setCopiedAdminEmail] = useState(null);
  const [copiedBizEmail, setCopiedBizEmail] = useState(null);
  const [copiedNormalEmail, setCopiedNormalEmail] = useState(null);
  const [copiedNormalPassword, setCopiedNormalPassword] = useState(null);

  const handleClick = () => {
    onClose();
  };

  const handleCopyAdminEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedAdminEmail(email);
    setTimeout(() => {
      setCopiedAdminEmail(null);
    }, 1500); // Clear the copied email message after 1.5 seconds
  };

  const handleCopyBizEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedBizEmail(email);
    setTimeout(() => {
      setCopiedBizEmail(null);
    }, 1500); // Clear the copied email message after 1.5 seconds
  };

  const handleCopyNormalEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedNormalEmail(email);
    setTimeout(() => {
      setCopiedNormalEmail(null);
    }, 1500); // Clear the copied email message after 1.5 seconds
  };
  const handleCopyNormalPassword = (Password) => {
    navigator.clipboard.writeText(Password);
    setCopiedNormalPassword(Password);
    setTimeout(() => {
      setCopiedNormalPassword(null);
    }, 1500); // Clear the copied email message after 1.5 seconds
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box>
        <LogoDialog />
      </Box>
      <DialogTitle sx={{ textAlign: "center" }}>
        All types of users on the site!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          There are three types of ready users, you are welcome to experiment
          with them!
        </DialogContentText>
        <List>
          <ListItem>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div className="email-container">
                  <span>Admin User - admin@gmail.com</span>
                  <IconButton
                    onClick={() => handleCopyAdminEmail("admin@gmail.com")}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                  {copiedAdminEmail && (
                    <span className="copied-message">Copied!</span>
                  )}
                </div>
              }
              secondary="can edit and delete any movie."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div className="email-container">
                  <span> Business User - business@gmail.com</span>
                  <IconButton
                    onClick={() => handleCopyBizEmail("business@gmail.com")}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                  {copiedBizEmail && (
                    <span className="copied-message">Copied!</span>
                  )}
                </div>
              }
              secondary="can edit and delete only his own movies."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div className="email-container">
                  <span> Normal User - normal@gmail.com</span>
                  <IconButton
                    onClick={() => handleCopyNormalEmail("normal@gmail.com")}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                  {copiedNormalEmail && (
                    <span className="copied-message">Copied!</span>
                  )}
                </div>
              }
              secondary="Can only watch movies and mark favorite movies."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PasswordIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <div className="email-container">
                  <span> The password is the same all - Aa123456! </span>
                  <IconButton
                    onClick={() => handleCopyNormalPassword("Aa123456!")}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                  {copiedNormalPassword && (
                    <span className="copied-message">Copied!</span>
                  )}
                </div>
              }
            />
          </ListItem>
        </List>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center" }}>
        <Button onClick={handleClick} variant="contained" color="error">
          lets start
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShowUsers;
