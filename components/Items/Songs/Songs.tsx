import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";

import styled from "styled-components";
import Stack from "@mui/material/Stack";
interface IProps {
  title?: string;
  subtitle?: string;
  NoSong?: number;
}
const Songs = React.memo((props: IProps) => {
  const { title, subtitle, NoSong } = props;
  return (
    <StyledWrapper flexDirection="row" justifyContent="space-between">
      <Stack flexDirection="row" alignItems="center">
        <StyledImgWraper>
          <img
            src="https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36"
            alt="image"
          />
        </StyledImgWraper>
        <Stack sx={{ pr: 2 }}>
          <Typography>{NoSong}</Typography>
        </Stack>
        <Stack>
          <Typography>{title}</Typography>
          <Typography>{subtitle}</Typography>
        </Stack>
      </Stack>
      <Stack justifyContent="center">
        <Stack justifyContent="center">
          <Typography className="text-time">3:50</Typography>
          <Stack className="icon-right" direction="row">
            <IconButton size="small">
              <AddIcon />
            </IconButton>
            <IconButton size="small" sx={{ p: 0 }}>
              <FavoriteBorderIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </StyledWrapper>
  );
});

const StyledImgWraper = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

const StyledWrapper = styled(Stack)`
  .icon-right {
    display: none;
  }
  &:hover {
    .text-time {
      display: none;
    }
    .icon-right {
      display: block;
    }
  }
`;
export default Songs;
