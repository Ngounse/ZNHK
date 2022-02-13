import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";

interface IProps {
  title: string;
}
const GenresMoods = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <StyledImgWraper>
        <img
          src="https://i.scdn.co/image/ab67706f0000000315c36d1e1430f229841845ed"
          alt="image"
        />
      </StyledImgWraper>
    </Box>
  );
});
const StyledImgWraper = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export default GenresMoods;
