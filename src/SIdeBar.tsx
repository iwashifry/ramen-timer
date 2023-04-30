import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";

import icon from "./icon.png";
import pjson from "../package.json";

type Props = {
  drawerOpen: boolean;
  onToggleQR: () => void;
  onToggleDrawer: () => void;
};

const DrawerList = styled("div")(() => ({
  width: 250,
}));

const DrawerHeader = styled("div")(() => ({
  height: 150,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em",
  backgroundColor: "#4a148c",
  color: "#ffffff",
  fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, sans-serif",
}));

const DrawerAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
}));

export const SideBar = ({ drawerOpen, onToggleQR, onToggleDrawer }: Props) => {
  const handleURL = () => {
    window.open("https://github.com/sprout2000/menjikan#readme", "_blank");
  };

  return (
    <Drawer variant="temporary" open={drawerOpen} onClose={onToggleDrawer}>
      <DrawerList role="presentation" onClick={onToggleDrawer}>
        <DrawerHeader>
          <DrawerAvatar>
            <img src={icon} width={64} />
          </DrawerAvatar>
          <p>麺時間 v{pjson.version}</p>
        </DrawerHeader>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onToggleQR} aria-label="share">
              <ListItemIcon>
                <Icon>share</Icon>
              </ListItemIcon>
              <ListItemText secondary="Share" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={handleURL} aria-label="repo">
              <ListItemIcon>
                <Icon>open_in_new</Icon>
              </ListItemIcon>
              <ListItemText secondary="GitHub Repo" />
            </ListItemButton>
          </ListItem>
        </List>
      </DrawerList>
    </Drawer>
  );
};