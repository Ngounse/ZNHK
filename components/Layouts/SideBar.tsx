import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import { MENUS } from "./utils";
import Header from "./Header";
import { useRouter } from "next/router";

const SideBar = React.memo(() => {
  const router = useRouter();
  const handleClick = (page: string) => {
    router?.push(`/spotify/${page}`);
    console.log("page::", page);
  };
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
    >
      <div>
        <Header />
        <List>
          {MENUS.map((menu: any, index: number) => (
            <ListItem
              onClick={() => handleClick(menu.value)}
              selected={menu.value === "chartxs"}
              button
              key={index}
            >
              <ListItemIcon>
                {menu.icon === "HomeIcon" && <HomeIcon />}
                {menu.icon === "FlashOnIcon" && <FlashOnIcon />}
                {menu.icon === "LoyaltyIcon" && <LoyaltyIcon />}
                {menu.icon === "LightbulbIcon" && <LightbulbIcon />}
                {menu.icon === "PlaylistPlayIcon" && <PlaylistPlayIcon />}
                {menu.icon === "FavoriteIcon" && <FavoriteIcon />}
                {menu.icon === "PersonIcon" && <PersonIcon />}
              </ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
});
export default SideBar;
