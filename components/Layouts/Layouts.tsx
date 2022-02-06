import React from "react";
import SideBar from "./SideBar";
import styled from "styled-components";

interface IProps {
  children: any;
}
const Layouts = React.memo((props: IProps) => {
  return (
    <main>
      <StyledContainer id="id-layout">
        <SideBar></SideBar>
        <div>{props.children}</div>
      </StyledContainer>
    </main>
  );
});
const StyleLayoutWrapper = styled.div`
  /* display: flex;
  flex: 1;
  flex-direction: row; */
`;
const StyledContainer = styled.div`
  padding-left: 200px;
`;
export default Layouts;
