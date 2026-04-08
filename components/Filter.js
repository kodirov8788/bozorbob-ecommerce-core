import React, { useState } from "react";
import filterSearch from "../utils/filterSearch";
import { useRouter } from "next/router";

const Filter = ({ t }) => {
  const [sort, setSort] = useState("");
  const router = useRouter();
  const handleSort = (e) => {
    setSort(e.target.value);
    filterSearch({ router, sort: e.target.value });
  };

  return (
    <div className="filter__filter">
      <div className="">
        <select
          className="Filter_select"
          value={sort}
          onChange={handleSort}
        >
          <option value="-createdAt">{t.newest}</option>
          <option value="oldest">{t.oldest}</option>
          <option value="-sold">{t.best_sales}</option>
          <option value="-price">{t.price_high_low}</option>
          <option value="price">{t.price_low_high}</option>
        </select>
      </div>
    </div >
  );
};

export default Filter;
