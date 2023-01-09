import React from "react";
import {
  Navbar,
  LeftMenu, 
  RightMenuMessages,
  RightMenuFriends,
} from "../../layout";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id } = useSelector((state) => state.user);
  const username="username"
  const data = 'Data from parent';
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="1rem 4%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <LeftMenu />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          _The posts will be displayed here_
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <RightMenuMessages/>
            {/* <Box m="2rem 0" />
            <RightMenuFriends /> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
