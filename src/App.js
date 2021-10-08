/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import DataTable from "./components/DataTable";
import Filters from "./components/Filters";

const App = () => {
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
        <Filters />
        <DataTable />
      </div>
    </div>
  );
};

export default App;
