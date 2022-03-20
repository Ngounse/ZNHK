import React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { itemData } from "./utils";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

interface IProps {
  title: string;
}

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const GenresMoods = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <Stack>
      <StyledImageList
        sx={{
          width: 500,
          height: 450,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = 1;
          const rows = 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows} sx={{ p: 1 }}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <StyledImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                // position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    {/* <StarBorderIcon /> */}
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </StyledImageList>
    </Stack>
  );
});

const StyledImageList = styled(ImageList)`
  && {
    .MuiImageListItemBar-root {
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .MuiImageListItemBar-titleWrap {
        flex-grow: unset;
      }
      .MuiSvgIcon-root {
        width: 80px;
        height: 80px;
      }
    }
  }
`;

const StyledImageListItemBar = styled(ImageListItemBar)`
  :hover {
    /* background-color: red; */
  }
`;
export default GenresMoods;
