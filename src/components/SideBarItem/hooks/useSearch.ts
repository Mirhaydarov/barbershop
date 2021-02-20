// Core
import { ChangeEvent } from "react";

// Models
import { addSearchValue, addTypeSearchValue } from "../../../models/clients";

// Types
import { FilterClientSearchTypes } from "../../../init/types";

const useSearch = (searchBy: FilterClientSearchTypes) => {
  const isString = (
    event: ChangeEvent<HTMLInputElement> | string
  ): event is string => {
    return typeof event === "string";
  };

  const onChange = (event: ChangeEvent<HTMLInputElement> | string) => {
    addTypeSearchValue(searchBy);

    if (isString(event)) {
      addSearchValue(event);
    } else {
      const { value } = event.target;
      addSearchValue(value);
    }
  };

  return {
    onChange,
  };
};

export { useSearch };
