import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export const MENUS = [
  { label: "Home", value: "home", url: "/", icon: <HomeIcon /> },
  { label: "Charts", value: "charts", url: "/charts", icon: <BoltIcon /> },
  { label: "News", value: "news", url: "/news", icon: <LocalOfferIcon /> },
  { label: "Genres", value: "genres", url: "/genres", icon: <LightbulbIcon /> },
  {
    label: "Playlists",
    value: "playlists",
    url: "/playlists",
    icon: <PlaylistPlayIcon />,
  },
  { label: "Songs", value: "songs", url: "/songs", icon: <FavoriteIcon /> },
  { label: "Artists", value: "artists", url: "/artists", icon: <PersonIcon /> },
];
export const checkCurrentPage = (url: string, cur_url: string) => {
  if (`/spotify${url}` === cur_url) {
    return true;
  }
  return false;
};
