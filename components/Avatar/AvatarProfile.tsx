import React from "react";
import styled from "styled-components";
// import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

interface IProps {
  src: any;
  alt: any;
  artist: any;
}
const AvatarProfile = React.memo((props: IProps) => {
  const { src, alt, artist } = props;
  return (
    <div id="avatar">
      <Stack direction="row" spacing={2}>
        <Avatar alt={alt} src={src} sx={{ width: 200, height: 200 }} />
      </Stack>
      <Typography variant="subtitle2">{artist}</Typography>
    </div>
  );
});

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledAvatar = styled(Avatar)`
  && {
    margin-bottom: 10px;
  }
`;

export default AvatarProfile;
