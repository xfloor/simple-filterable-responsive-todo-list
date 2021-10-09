/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../theme";
import { makeStyles } from "@mui/styles";
import {
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  SvgIcon,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const IconFilter = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M24.06 24.06C22.82 25.31 20.95 25.31 19.7 24.06L15.59 19.95C14.09 20.7 12.34 21.2 10.6 21.2C4.74 21.2 0 16.46 0 10.6C0 4.74 4.74 0 10.6 0C16.46 0 21.2 4.74 21.2 10.6C21.2 12.34 20.7 14.09 19.95 15.59L24.06 19.7C25.19 20.95 25.19 22.82 24.06 24.06ZM18.7 10.6C18.7 6.11 15.09 2.49 10.6 2.49C6.11 2.49 2.49 6.11 2.49 10.6C2.49 15.09 6.11 18.7 10.6 18.7C15.09 18.7 18.7 15.09 18.7 10.6Z" />
    </SvgIcon>
  );
};

const useStyles = makeStyles((theme) => ({
  searchField: {
    "& .Mui-focused .MuiOutlinedInput-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root fieldset.MuiOutlinedInput-notchedOutline":
      {
        borderColor: theme.palette.third.main,
      },
  },
  userIdField: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiSvgIcon-root": {
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "50%",
      color: theme.palette.primary.main,
    },
  },
}));

const Filters = ({ filters, setFilters, filterableIds }) => {
  const classes = useStyles();
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
      <Box
        sx={{ marginY: 3, backgroundColor: theme.palette.third.main }}
        display="flex"
        alignItems="center"
      >
        <IconFilter
          sx={{ color: theme.palette.common.white, margin: "0 15px" }}
        />
        <TextField
          name="title"
          fullWidth
          label="Search"
          variant="outlined"
          value={filters.title}
          onChange={(e) =>
            setFilters({
              ...filters,
              title: e.target.value,
            })
          }
          inputProps={{
            sx: {
              backgroundColor: theme.palette.common.white,
              borderColor: theme.palette.third.main,
            },
          }}
          className={classes.searchField}
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
            className={classes.userIdField}
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
