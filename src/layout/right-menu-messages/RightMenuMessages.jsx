import React from "react";
import { Box, useTheme, Typography, Divider } from "@mui/material";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import { PreviewMessage } from "../../components";
import profilePicture from "../../assets/images/profile_picture.jpg";

const RightMenuMessages = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const background = palette.background.alt;
  const accent = palette.primary.light;


  /* Array to simulate the response of the server side */
  const arrayMessages = [
    {
      username: "Joseph H . Flores",
      profilePicture: profilePicture,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.",
    },
    {
      username: "Steven T. Poe",
      profilePicture: profilePicture,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.",
    },
    {
      username: "Felisha M. Martin",
      profilePicture: profilePicture,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.",
    },
    {
      username: "Felisha M. Martin",
      profilePicture: profilePicture,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.",
    },
    {
      username: "Felisha M. Martin",
      profilePicture: profilePicture,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.",
    },
    
  ];
  return (
    <Box
      sx={{
        padding: "1.5rem 0.75rem 1rem",
        backgroundColor: background,
        borderRadius: "0.75rem",
        marginTop: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
        gap="1rem"
        pb="1.1rem"
      >
        <MarkChatUnreadIcon color="primary" sx={{  marginLeft: "0.5rem" }} />
        <Box>
          <Typography variant="h4" color={dark} fontWeight="500">
            Messages
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box mb="0.5rem">
        {arrayMessages.map((data) => (
          <PreviewMessage
            profilePicture={data.profilePicture}
            username={data.username}
            message={data.message}
          />
        ))}
      </Box>
      <Divider />
      <Box
        pt="1rem"
      >
        <Typography align="center" color="primary"
        sx={{
          "&:hover": {
            color: palette.primary.light,
            cursor: "pointer",
          },
        }}>Read more...</Typography>
      </Box>
    </Box>
  );
};

export default RightMenuMessages;
