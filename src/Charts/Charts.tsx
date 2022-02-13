import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Track from "./Track";
import styled from "styled-components";

const Home = React.memo(() => {
  return (
    <StyledWrapper>
      <Track title="" subtitle="Charts" />
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
