// Core
import { createStore, createEvent } from "effector";

// Types
import { CheckboxValueTypes } from "../../components/SideBarItem/checkbox";

const isValue = (
  state: CheckboxValueTypes[],
  arrayOfValue: CheckboxValueTypes[]
) => {
  return state.some((item) => item === arrayOfValue.join(" "));
};

// Store
export const $filteredCheckboxValue = createStore<CheckboxValueTypes[]>([]);

// Event
export const addCheckboxValue = createEvent<CheckboxValueTypes[]>();

// Actions
$filteredCheckboxValue.on(addCheckboxValue, (state, value) => {
  if (isValue(state, value)) {
    return state.filter((item) => item !== value.join(" "));
  }
  return state.concat(value);
});