import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone"; 
import { setLogin } from "../../store/state";

const Form = ({ loginShape, registerShape }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDesktopView = useMediaQuery("(min-width:600px)");
  const registerSchema = yup.object().shape(registerShape);
  const loginSchema = yup.object().shape(loginShape);
  const initialValuesRegister = loadInitialValues(registerShape);
  const initialValuesLogin = loadInitialValues(loginShape);
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    /* add code to save it into the database  */
     // Display the key/value pairs
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    onSubmitProps.resetForm();
    setPageType("login");
  };

  const login = async (values, onSubmitProps) => {
    /* add code to save it into the database  */

    onSubmitProps.resetForm();
    const response = { user: "JohnDoe", token: "123qwe" }; //change the const with the response of the backend
    const loggedIn = response;
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="2rem"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isDesktopView ? undefined : "span 4" },
            }}
          >
            {isRegister && (
              <>
                {Object.entries(initialValuesRegister).map((data) => (
                  <TextField
                    label={data}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values[data]}
                    name={data[0]}
                    key={data[0]}
                    error={
                      Boolean(touched[data[0]]) && Boolean(errors[data[0]])
                    }
                    helperText={touched[data[0]] && errors[data[0]]}
                    sx={{
                      gridColumn:
                        data[0] === "firstName" ||
                        data[0] === "lastName" ||
                        data[0] === "location" ||
                        data[0] === "occupation"
                          ? "span 2"
                          : "span 4",
                    }}
                  />
                ))}
                <Box
                  gridColumn="span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`2px dashed ${palette.primary.main}`}
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p>Add Picture Here</p>
                        ) : ( 
                          <Box sx = {{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </Box>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}
            {isLogin && (
              <>
              {Object.entries(initialValuesLogin).map((data) => (
                  <TextField
                  label={data[0]}
                  onBlur={handleBlur}
                  onChange={handleChange} 
                  value={values[data[0]]}
                  name={data[0]}
                  key={data[0]}
                  error={Boolean(touched[data[0]]) && Boolean(errors[data[0]])}
                  helperText={touched[data[0]] && errors[data[0]]}
                  sx={{ gridColumn: "span 2" }}
                /> 
                ))} 
              </>
            )}
          </Box> 
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

//Function to get the initial state of the form
const loadInitialValues = (objectShape) => {
  const initialValue = {};
  for (const key in objectShape) {
    initialValue[key] = "";
  }
  return initialValue;
};

export default Form;
