import React from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import NewRelease from "./NewRelease";
import FeaturedPlaylists from "./FeaturedPlaylists";
import MoreLike from "./MoreLike";

const Home = React.memo(() => {
  return (
    <Stack>
      {/* <NewRelease /> */}

      <FeaturedPlaylists />
      <MoreLike />
    </Stack>
  );
});
const StyledStack = styled(Stack)`
  padding: 40px 80px 140px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default Home;
