import { createTheme } from "@mui/material/styles";
const palette = {
  primary: {
    main: "#01307a",
  },
  secondary: {
    main: "#7acaea",
  },
  sectionBackgroundColor: "#f4f4f4",
};

const theme = createTheme({
  palette: {
    ...palette,
  },
  typography: {
    h3: {
      fontSize: "1.6rem",
      textTransform: "uppercase",
      fontWeight: 700,
      color: palette.primary.main,
    },
    h4: {
      fontSize: "1.1rem",
      textTransform: "uppercase",
      fontWeight: 700,
      color: palette.primary.main,
    },
  },
});

export default theme;
