/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import DataTable from "./components/DataTable";
import Filters from "./components/Filters";

const App = () => {
  const [filters, setFilters] = useState({
    title: "",
    completed: false,
    userId: "",
  });

  const [data, setData] = useState([]);
  const [ids, setIds] = useState([]);
  const filteredData = data
    .filter((e) => e.completed === filters.completed)
    .filter((e) => filters.title === "" || e.title.includes(filters.title))
    .filter((e) => filters.userId === "" || e.userId === filters.userId);

  useEffect(() => {
    async function fetchData() {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await api.json();
      setIds(
        res
          .map((e) => e.userId)
          .filter((userId, i, arr) => {
            return arr.indexOf(userId) === i;
          })
      );
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div
      css={css`
        display: flex;
        aligni-tems: center;
        justify-content: center;
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: max-content;
          grid-column-gap: 60px;
          width: 100%;
          max-width: 1220px;
          margin: 3rem auto;
          @media (max-width: 900px) {
            grid-template-columns: 1fr;
          }
        `}
      >
        <Filters
          filters={filters}
          setFilters={setFilters}
          filterableIds={ids}
        />
        <DataTable data={filteredData} />
      </div>
    </div>
  );
};

export default App;
