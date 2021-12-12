import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import { MENU, YOUR_LIBRARY } from "./util";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const Layouts = React.memo((props: any) => {
  // console.log("MENU::", MENU);

  return (
    <Drawer
      // sx={{
      // 	width: drawerWidth,
      // 	flexShrink: 0,
      // 	'& .MuiDrawer-paper': {
      // 		width: drawerWidth,
      // 		boxSizing: 'border-box',
      // 	},
      // }}
      variant="permanent"
      anchor="left"
    >
      <Typography variant="h4"> Spotify</Typography>
      {/* <Toolbar /> */}
      <Divider />
      <List>
        {MENU.map((item) => (
          <ListItem button key={item.label}>
            <ListItemIcon>
              {item.icon === "HomeIcon" && <HomeIcon />}
              {item.icon === "FlashOnIcon" && <FlashOnIcon />}
              {item.icon === "LoyaltyIcon" && <LoyaltyIcon />}
              {item.icon === "LightbulbIcon" && <LightbulbIcon />}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {YOUR_LIBRARY.map((item) => (
          <ListItem button key={item.label}>
            <ListItemIcon>
              {item.icon === "PlaylistPlayIcon" && <PlaylistPlayIcon />}
              {item.icon === "FavoriteIcon" && <FavoriteIcon />}
              {item.icon === "PersonIcon" && <PersonIcon />}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
});

export default Layouts;
