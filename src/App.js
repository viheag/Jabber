import {  Navbar } from "./layout"; 
import { LoginPage } from "./views";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme/theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>   
      <CssBaseline/>
      <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <Navbar /> : <Navigate to="/" />}
            /> 
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;