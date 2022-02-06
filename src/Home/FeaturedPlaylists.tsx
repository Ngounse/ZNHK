import React from "react";
import { Button, Grid, Divider } from "@mui/material";
import styled from "styled-components";
import Cover from "../../components/Cover";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { arr_album } from "./utils";

const FeaturedPlaylists = React.memo(() => {
  return (
    <>
      {/* <StyledHeader> */}
      <div>
        <p className="description">Recommendation</p>
        <h3 className="title">More Like</h3>
      </div>
      <div>
        <Button endIcon={<ArrowForwardIcon />}>see all</Button>
      </div>
      {/* </StyledHeader> */}
      <Grid container spacing={2}>
        {arr_album.map((item: any, index: number) => (
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
      <Divider />
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

export default FeaturedPlaylists;
