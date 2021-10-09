/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../theme";
import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Filters = ({ filters, setFilters, filterableIds }) => {
  const resetFilters = () =>
    setFilters({
      title: "",
      completed: false,
      userId: "",
    });
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
        <TextField
          name="title"
          fullWidth
          label="Search"
          variant="outlined"
          value={filters.title}
          css={css`
            background: green;
          `}
          onChange={(e) =>
            setFilters({
              ...filters,
              title: e.target.value,
            })
          }
          inputProps={{
            sx: { backgroundColor: theme.palette.common.white },
          }}
        />
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
          control={
            <Switch
              value={filters.completed}
              onChange={(e, prev) =>
                setFilters({
                  ...filters,
                  completed: prev ? true : false,
                })
              }
              color="primary"
            />
          }
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
          <Select
            value={filters.userId}
            inputProps={{
              sx: { backgroundColor: theme.palette.common.white },
            }}
            onChange={(e) =>
              setFilters({
                ...filters,
                userId: e.target.value,
              })
            }
          >
            <MenuItem value="" key="blank-choice">
              All
            </MenuItem>
            {filterableIds.map((e, k) => (
              <MenuItem value={e} key={k}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        sx={{
          margin: "0 auto",
          display: "block",
          textDecoration: "underline",
          textTransform: "capitalize",
        }}
        variant="text"
        onClick={() => resetFilters()}
      >
        Reset Filters
      </Button>
    </Box>
  );
};

export default Filters;
