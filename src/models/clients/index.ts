// Core
import {
  createStore,
  createEffect,
  createEvent,
  restore,
  combine,
} from "effector";

// Models
import { $filteredCheckboxValue } from "../filter";

// Utils
import { normalize, filter as filterArray } from "../../utils";

// Types
import {
  ClientTypes,
  ClientsTypes,
  FilterClientSearchTypes,
} from "../../init/types";

// Effects
export const fetchClientsFx = createEffect<void, ClientsTypes, Error>(
  async () => {
    const req = await fetch("db.json");
    return req.json();
  }
);

// Store
export const $clients = createStore<ClientsTypes>({ clients: [] });
export const $searchValue = createStore<string>("");
export const $typeSearchValue = createStore<FilterClientSearchTypes>("id");

export const $fetchError = restore<Error>(fetchClientsFx.failData, null);

export const $searchFilteredClients = combine(
  $clients,
  $searchValue,
  $typeSearchValue,
  ({ clients }, value, typeValue) =>
    value === ""
      ? clients
      : clients.filter((data: ClientTypes) =>
          normalize(data[typeValue]).includes(normalize(value))
        )
);

export const $checkboxFilteredClients = combine(
  $clients,
  $filteredCheckboxValue,
  ({ clients }, checkboxValue) =>
    !checkboxValue.length
      ? clients
      : filterArray(clients, {
          status: checkboxValue,
        })
);

export const $filteredClients = combine(
  $clients,
  $searchFilteredClients,
  $checkboxFilteredClients,
  $searchValue,
  $filteredCheckboxValue,
  ({ clients }, searchClients, checkboxClients, value, checkboxValue) => {
    if (checkboxValue.length) {
      return checkboxClients;
    } else if (value) {
      return searchClients;
    }
    return clients;
  }
);

export const $clientsGetStatus = combine({
  loading: fetchClientsFx.pending,
  error: $fetchError,
  data: $filteredClients,
});

// Event
export const addSearchValue = createEvent<string>();
export const addTypeSearchValue = createEvent<FilterClientSearchTypes>();

// Actions
$clients.on(fetchClientsFx.doneData, (state, data) => data);
$searchValue.on(addSearchValue, (state, value) => value);
$typeSearchValue.on(addTypeSearchValue, (state, value) => value);
