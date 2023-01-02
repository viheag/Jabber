import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <div>Sidebar</div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding-top: 50px;  
  padding-left: 250px; 
  background-color: grey; 
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

export default Sidebar;
