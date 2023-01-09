
//Palette
/* 
  27187E persian indigio
  758bfd cornflower Blue
  aeb8fe maximum blue purple
  f1f2f6 cultured
  ff8600 dark orange
*/
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50: "#E1ddf8",
      100: "#b4a9ef",
      200: "#8776e5",
      300: "#5943db",
      400: "#3b24bc",
      500: "#28187E",
      600: "#251778",
      700: "#201467",
      800: "#1b1056",
      900: "#100a36",
    },
  };
   
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette: dark mode
              primary: {
                dark: colorTokens.primary[100],
                main: colorTokens.primary[300],
                light: colorTokens.primary[100],
                superlight: colorTokens.primary[50]

              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
                superlight: colorTokens.grey[800]

              },
              background: {
                default: colorTokens.grey[800],
                alt: colorTokens.grey[900],
              },
            }
          : {
              // palette: light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[100],
                superlight: colorTokens.primary[50]

              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[100],
                superlight: colorTokens.grey[10]
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };