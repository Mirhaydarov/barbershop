// Core
import { createStore, createEvent } from "effector";

// Types
import { ClientTypes, clientTemplate } from "../../init/types";

// Store
export const $client = createStore<ClientTypes>(clientTemplate);

// Events
export const addClient = createEvent<ClientTypes>();

// Actions
$client.on(addClient, (state, client) => client);
