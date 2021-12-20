import React from "react";
import { Typography, Stack, Button, Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

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
          <Grid item xs={4} md={3}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
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
const StyledBody = styled.div``;

export default Home;
