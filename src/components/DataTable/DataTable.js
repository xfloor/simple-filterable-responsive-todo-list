/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { Pagination, Typography } from "@mui/material";
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
    margin: "10px 0",
  },
}));

const DataTable = ({ data, itemsPerPage }) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [cursor, setCursor] = useState([0, itemsPerPage]);

  useEffect(() => {
    setCursor([0, itemsPerPage]);
    setPage(1);
  }, [data, itemsPerPage]);

  useEffect(() => {
    function pagination() {
      let start = (page - 1) * itemsPerPage;
      let end = start + itemsPerPage;
      setCursor([start, end]);
    }
    pagination();
  }, [page, itemsPerPage]);

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
          data.length !== 0 &&
          data.slice(cursor[0], cursor[1]).map((e, k) => {
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
        <Box
          gridColumn="1 / span 3"
          display="grid"
          justifyContent="center"
          pt="15px"
        >
          <Pagination
            siblingCount={1}
            count={Math.ceil(data.length / itemsPerPage)}
            onChange={(e, value) => setPage(value)}
            page={page}
          />
        </Box>
      </Box>
      {!data ||
        (data.length === 0 && (
          <Box gridColumn="1 -1">
            <Typography align="center" variant="h5" sx={{ margin: "30px" }}>
              No results
            </Typography>
          </Box>
        ))}
    </Box>
  );
};

export default DataTable;
