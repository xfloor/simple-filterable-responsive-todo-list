/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import theme from "../../theme";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Filters = () => {
  return (
    <Box
      sx={{
        p: "30px",
        backgroundColor: theme.palette.sectionBackgroundColor,
        alignSelf: "start",
      }}
    >
      <Typography variant="h3" align="center">
        Filters
      </Typography>
      <Box sx={{ py: 3 }}>
        <TextField name="search" fullWidth label="Search" variant="outlined" />
      </Box>
      <Box sx={{ py: 3 }}>
        <Typography
          variant="h4"
          css={css`
            margin-bottom: 18px;
          `}
        >
          Completed
        </Typography>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="NO"
          labelPlacement="start"
        />
      </Box>
      <Box sx={{ py: 3 }}>
        <Typography
          variant="h4"
          css={css`
            margin-bottom: 18px;
          `}
        >
          Select user id
        </Typography>
        <FormControl fullWidth>
          <Select value={null}>
            <MenuItem value={1}>Test</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filters;
