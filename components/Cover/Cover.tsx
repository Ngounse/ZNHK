import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";

interface IProps {
  src: any;
  alt: any;
  title: any;
  artist: any;
}
const Cover = React.memo((props: IProps) => {
  const { src, alt, title, artist } = props;
  return (
    <div>
      <Card sx={{ minWidth: "100%" }}>
        <img src={`${src}`} srcSet={`${src}`} alt={alt} loading="lazy" />
        <CardContent>
          <Typography
            // className="mouse-pointer"
            variant="subtitle2"
          >
            {title}
          </Typography>
          <Typography
            // className="mouse-pointer"
            // sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {artist}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

const StyledBody = styled.div`
  display: flex;
  img {
    width: 100%;
    /* height: calc(10px + 100px); */
    object-fit: cover;
  }
  /* .mouse-pointer {
    cursor: pointer;
  } */
`;

export default Cover;
