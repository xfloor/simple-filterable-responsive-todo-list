import React, { useState, useEffect } from "react";
import { Pagination, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../theme";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tableBody: {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
  },
  tableHead: {
    borderBottom: "1px solid #c3c3c3",
    padding: "6px 10px",
    marginBottom: "20px",
  },
  tableBodyRow: {
    backgroundColor: theme.palette.common.white,
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    padding: "30px 0",
    margin: "10px 0",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: theme.palette.primary.main,
    },
    "& .Mui-selected, & .Mui-selected:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    "& .MuiSvgIcon-root": {
      border: `1px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
      borderRadius: "50%",
    },
  },
}));

const IconTrue = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
		c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
		L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
      />
    </SvgIcon>
  );
};

const IconFalse = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M20 2L18 0L10 8L2 0L0 2L8 10L0 18L2 20L10 12L18 20L20 18L12 10L20 2Z" />
    </SvgIcon>
  );
};

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
        {data && data.length !== 0 && (
          <>
            {data.slice(cursor[0], cursor[1]).map((e, k) => {
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
                  <Box
                    className={classes.tableBodyRow}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {e.completed ? (
                      <IconTrue color="secondary" />
                    ) : (
                      <IconFalse color="secondary" />
                    )}
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
                className={classes.pagination}
              />
            </Box>
          </>
        )}
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
