import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import NewReleases from "./NewRelease";
import Recommendation from "./Recommendation";
import Track from "./Track";
import Discover from "./Discover";
import styled from "styled-components";

const Home = React.memo(() => {
  return (
    <StyledWrapper>
      <NewReleases title="Releases" subtitle="New" showSeeAll={true} />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <Stack
        sx={{ maxHeight: 550, overflow: "hidden" }}
        flex="1"
        flexDirection="row"
      >
        <Track title="Global Top 50" subtitle="Hot Track" />
        <Stack sx={{ p: 4 }} />
        <Discover title={`Genres & Moods`} subtitle="Discover" />
      </Stack>
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <NewReleases title="Featured Playlists" subtitle="Pilihan Editor" />
      <Recommendation
        title="More Like ChaconneScott"
        subtitle="Recommendation"
      />
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;

export default Home;
