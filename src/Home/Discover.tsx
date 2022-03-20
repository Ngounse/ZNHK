import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { GenresMoods } from "components/Items";

// import { SPOTIFY_API } from "config";

interface IProps {
  title?: string;
  subtitle?: string;
  showSeeAll?: boolean;
}
const Discover = React.memo((props: IProps) => {
  const { title, subtitle, showSeeAll } = props;

  return (
    <StyledWrapper>
      <Typography variant="h6">{subtitle || "New"}</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h5">{title}</Typography>
        {showSeeAll && <Button endIcon={<ArrowForwardIcon />}>see all</Button>}
      </Stack>
      <Stack direction="row" spacing={2} sx={{ overflow: "auto", width: 730 }}>
        <GenresMoods title={"title"} />
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export default Discover;
