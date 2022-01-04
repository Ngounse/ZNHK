import React from "react";
import { Typography, Stack, Button, Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

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
const Home = React.memo(() => {
  return (
    <StyledStack>
      <>
        <StyledHeader>
          <div>
            <div className="description">New</div>
            <h3 className="title">Releases</h3>
          </div>
          <div>
            <Button>see all</Button>
          </div>
        </StyledHeader>
        <Grid container spacing={2}>
          {arr_test.map((item: any, index: number) => (
            <Grid item xs={12} sm={6} md={3}>
              <StyledBody>
                <Card sx={{ minWidth: "100%" }}>
                  <img
                    src={`${item.cover}`}
                    srcSet={`${item.cover}`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <CardContent>
                    <Typography className="mouse-pointer" variant="body2">
                      {item.title}
                    </Typography>
                    <Typography
                      className="mouse-pointer"
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.artist}
                    </Typography>
                  </CardContent>
                </Card>
              </StyledBody>
            </Grid>
          ))}
        </Grid>
        <StyledBody></StyledBody>
      </>
    </StyledStack>
  );
});
const StyledStack = styled(Stack)`
  padding: 40px 80px 140px;
  display: flex;
  flex: 1;
`;
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
const StyledBody = styled.div`
  display: flex;
  img {
    width: 100%;
    height: width;
    object-fit: cover;
  }
  .mouse-pointer {
    cursor: pointer;
  }
`;
export default Home;
