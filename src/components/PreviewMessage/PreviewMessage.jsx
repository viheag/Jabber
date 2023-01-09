import { Box, useTheme, Typography } from "@mui/material"; 
import React from "react";

const PreviewMessage = ({profilePicture, username, message}) => {
  const { palette } = useTheme();
  const light = palette.neutral.light;
  const dark = palette.neutral.dark;
  const superlight = palette.neutral.superlight;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: superlight,
        borderRadius: "0.5rem",
      }}
      mt="0.5rem"
      p="0.5rem"
    >
      <Box width="40px" height="40px">
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          width="40px"
          height="40px"
          alt="user"
          src={profilePicture}
        />
      </Box>
      <Box
        sx={{
          justifyContent: "left",
          maxWidth: "auto",
        }}
        pl="0.5rem"
      >
        <Typography
          variant="subtitle1"
          color="primary"
          fontWeight="500"
          sx={{
            "&:hover": {
              color: palette.primary.light,
              cursor: "pointer",
            },
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
        >
          {username}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
          color={dark}
          variant="caption"
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default PreviewMessage;
