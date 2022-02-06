import React from "react";
import { Button, Grid, Divider } from "@mui/material";
import styled from "styled-components";
import AvatarProfile from "../../components/Avatar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { arr_avatar } from "./utils";

const MoreLike = React.memo(() => {
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
        {arr_avatar.map((item: any, index: number) => (
          <Grid item md={2} key={index}>
            <AvatarProfile
              src={item.cover}
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

export default MoreLike;
