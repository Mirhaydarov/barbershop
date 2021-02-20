// Core
import React, { FC } from "react";
import { Input } from "antd";

// Models
import { FilterClientSearchTypes } from "../../init/types";

// Hooks
import { useSearch } from "./hooks/useSearch";

// Styles
import "./index.css";

// Types
type SearchBarPropsTypes = {
  placeholder: string;
  searchBy: FilterClientSearchTypes;
};

const SearchBar: FC<SearchBarPropsTypes> = (props: SearchBarPropsTypes) => {
  const { placeholder, searchBy } = props;
  const { Search } = Input;

  const { onChange } = useSearch(searchBy);

  return (
    <Search
      className="searchBar"
      style={{ marginTop: ".4em", backgroundColor: "#636363", color: "#fff" }}
      placeholder={placeholder}
      onSearch={(value: string) => onChange(value)}
      onChange={onChange}
    />
  );
};

export { SearchBar };
