import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Form } from "../../components";
import * as yup from "yup";

const LoginPage = () => {
  const theme = useTheme();
  const registerShape = {
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    location: yup.string().required("required"),
    occupation: yup.string().required("required"),
    picture: yup.string().required("required"),
  };
  const loginShape = {
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  };
  const isDesktopView = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        width={isDesktopView ? "50%" : "93%"}
        p="1rem"
        m="1rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="500"
          variant="h5"
          sx={{ mb: "1.5rem" }}
          align="center"
        >
          Welcome to JABBER!, the correct place to jabber away!
        </Typography>

        <Form registerShape={registerShape} loginShape={loginShape} />
      </Box>
    </Box>
  );
};

export default LoginPage;
