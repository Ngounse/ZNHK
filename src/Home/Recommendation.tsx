import React from "react";
import AvatarProfile from "components/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";

interface IProps {
  title?: string;
  subtitle?: string;
  showSeeAll?: boolean;
}
const NewReleases = React.memo((props: IProps) => {
  const { title, subtitle, showSeeAll } = props;
  return (
    <StyledWrapper>
      <Typography variant="h6">{subtitle || "New"}</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h4">{title}</Typography>
        {showSeeAll && <Button endIcon={<ArrowForwardIcon />}>see all</Button>}
      </Stack>
      <Stack direction="row" spacing={2}>
        {range(0, 6).map((item, i) => (
          <AvatarProfile
            key={i}
            artist={"artist" + item}
            alt="alt"
            src="https://i.scdn.co/image/ab6761610000f1789e83221b244b3ec23d8faa58"
          />
        ))}
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default NewReleases;
