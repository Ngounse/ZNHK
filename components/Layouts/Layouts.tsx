import React from "react";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";
import Playing from "components/Playing";
import styled from "styled-components";

interface IProps {
  children: any;
}
const Layouts = React.memo((props: IProps) => {
  return (
    <StyleLayoutWrapper id="id-layout">
      <Stack className="content-layout" direction="row">
        <SideBar></SideBar>
        <StyledContent>{props.children}</StyledContent>
      </Stack>

      <Playing />
    </StyleLayoutWrapper>
  );
});
const StyleLayoutWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const StyledContent = styled.div`
  padding: 0 16px;
  width: calc(100vw - var(--sidebar_w));
`;

export default Layouts;
