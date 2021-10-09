import { createTheme } from "@mui/material/styles";
const palette = {
  primary: {
    main: "#01307a",
  },
  secondary: {
    main: "#7acaea",
  },
  third: {
    main: "#644c79",
  },
  sectionBackgroundColor: "#f4f4f4",
};

const theme = createTheme({
  palette: {
    ...palette,
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "DejaVu, sans-serif",
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
