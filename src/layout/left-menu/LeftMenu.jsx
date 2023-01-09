import React from "react";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import TwitterIcon from "@mui/icons-material/Twitter";

//The way is imported the profile picture will be updated to get it from the server-side
import profilePicture from "../../assets/images/profile_picture.jpg";

const LeftMenu = ({ userId }) => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  const background = palette.background.alt;
  const accent = palette.primary.light;

  return (
    <Box
      sx={{
        padding: "1.5rem 0.75rem 1.5rem",
        backgroundColor: background,
        borderRadius: "0.75rem",
        marginTop: "1rem",
      }}
    >
      {/* Info about the user. First row of the left-menu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        gap="0.5rem"
        pb="1.1rem"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          gap="1rem"
        >
          <Box width="60px" height="60px">
            <img
              style={{ objectFit: "cover", borderRadius: "50%" }}
              width="60px"
              height="60px"
              alt="user"
              src={profilePicture}
            />
          </Box>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {/* Add the user name*/}
              Welcome, user!
            </Typography>
            {/* Add the number of added friends */}
            <Typography color={medium}> # friends</Typography>
          </Box>
        </Box>
        {/* Add the event of click to update info */}
        <ManageAccountsIcon fontSize="medium" sx={{ color: main }} />
      </Box>

      <Divider />

      {/* Second box of the left-menu. Here's the info about the user as occupation and location so far*/}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnIcon fontSize="large" color="primary" />
          {/* Add the location */}
          <Typography color={accent}></Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkIcon fontSize="large" color="primary" />
          {/* Add the occupation */}
          <Typography color={accent}></Typography>
        </Box>
      </Box>

      <Divider />

      {/* Third box of the left-menu. The user could add some links. And the username will be displayed */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          gap="1rem"
          mb="0.5rem"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            gap="1rem"
          >
            <TwitterIcon fontSize="large" color="primary" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              {/* Add link of twitter */}
              <Typography color={medium}> </Typography>
            </Box>
          </Box>
          <EditIcon fontSize="medium" sx={{ color: main }} />
        </Box>
      </Box>
    </Box>
  );
};
export default LeftMenu;
