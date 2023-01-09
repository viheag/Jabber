import React from 'react'
import { Box, useTheme } from "@mui/material";

const RightMenuFriends = () => {
    const { palette } = useTheme();
  const background = palette.background.alt;
  return (
    <Box
      sx={{
        padding: "1.5rem 0.75rem 1.5rem",
        backgroundColor: background,
        borderRadius: "0.75rem",
        marginTop: "1rem",
      }}
    ></Box>
  )
}

export default RightMenuFriends