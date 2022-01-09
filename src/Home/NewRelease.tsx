import React from "react";
import { Button, Grid } from "@mui/material";
import styled from "styled-components";
import { Cover } from "../../components/cover/cover";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const arr_test = [
  {
    cover: "/215588.jpg",
    title: "well meaning and kindly",
    artist: "Deco*27 AI",
  },
  {
    cover: "/215588.jpg",
    title: "well meaning and madly",
    artist: "Deco*27 AI",
  },
  {
    cover: "/215588.jpg",
    title: "well meaning and funny",
    artist: "Deco*27 AI",
  },
  {
    cover: "/215588.jpg",
    title: "well meaning and lovely",
    artist: "Deco*27 AI",
  },
];
const NewRelease = React.memo(() => {
  return (
    <>
      <StyledHeader>
        <div>
          <div className="description">New</div>
          <h3 className="title">Releases</h3>
        </div>
        <div>
          <Button endIcon={<ArrowForwardIcon />}>see all</Button>
        </div>
      </StyledHeader>
      <Grid container spacing={2}>
        {arr_test.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Cover
              src={item.cover}
              title={item.title}
              alt={item.title}
              artist={item.artist}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
});
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
  .description {
    font-weight: 500;
    color: #949494;
  }
  .title {
    margin: 0;
    font-size: 25.2px;
  }
`;

export default NewRelease;
