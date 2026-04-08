import React, { useContext, useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { DataContext } from "../store/GlobalState";
import filterSearch from "../utils/filterSearch";
import { useRouter } from "next/router";
import en from "../locales/en";
import uz from "../locales/uz";

const Search = () => {
  const { state, dispatch } = useContext(DataContext);
  const { isSearchClick, cart } = state;
  // console.log("isSearchClick", isSearchClick);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : uz;
  const [search, setSearch] = useState("");
  //   const { state, dispatch } = useContext(DataContext);
  useEffect(() => {
    if (search) {
      filterSearch({ router, search: search ? search.toLowerCase() : "all" });
    }
    if (search !== "") {
      dispatch({
        type: "SEARCHCLICK",
        payload: {
          isSearchClick: true
        },
      });
    } else {
      dispatch({
        type: "SEARCHCLICK",
        payload: {
          isSearchClick: false
        },
      });
    }
  }, [search]);
  // console.log("search", search);



  const hundleBtn = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <form autoComplete="on" className="search__form">
      <input
        type="text"
        list="title_product"
        placeholder={t.search}
        value={search.toLowerCase()}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={hundleBtn}>
        <FiSearch />
      </button>
    </form>
  );
};

export default Search;
