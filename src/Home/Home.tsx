import React from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import NewRelease from "./NewRelease";

const Home = React.memo(() => {
  return (
    <StyledStack>
      <NewRelease />
    </StyledStack>
  );
});
const StyledStack = styled(Stack)`
  padding: 40px 80px 140px;
  display: flex;
  flex: 1;
`;

export default Home;
