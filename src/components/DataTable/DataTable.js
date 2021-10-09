/** @jsxImportSource @emotion/react */
import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../theme";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tableBody: {
    display: "grid",
    gridTemplateColumns: "max-content auto max-content",
  },
  tableHead: {
    borderBottom: "1px solid #c3c3c3",
    padding: "6px 10px",
  },
  tableBodyRow: {
    backgroundColor: theme.palette.common.white,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    padding: "30px 0",
    margin: "1.5rem 0",
  },
}));

const DataTable = ({ data }) => {
  const classes = useStyles();
  return (
    <Box
      sx={{ p: "30px", backgroundColor: theme.palette.sectionBackgroundColor }}
    >
      <Box className={classes.tableBody}>
        <Box className={classes.tableHead}>
          <Typography variant="h4">User ID</Typography>
        </Box>
        <Box className={classes.tableHead}>
          <Typography variant="h4">Title</Typography>
        </Box>
        <Box className={classes.tableHead}>
          <Typography variant="h4">Completed</Typography>
        </Box>

        {data &&
          data.map((e, k) => {
            return (
              <React.Fragment key={k}>
                <Box className={classes.tableBodyRow}>
                  <Typography variant="body1" align="center">
                    {e.userId}
                  </Typography>
                </Box>
                <Box className={classes.tableBodyRow}>
                  <Typography variant="body1">{e.title}</Typography>
                </Box>
                <Box className={classes.tableBodyRow}>
                  <Typography variant="body1" align="center">
                    {e.completed ? "true" : "false"}
                  </Typography>
                </Box>
              </React.Fragment>
            );
          })}
      </Box>
    </Box>
  );
};

export default DataTable;
