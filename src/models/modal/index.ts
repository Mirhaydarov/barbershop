// Core
import { createStore, createEvent } from "effector";

// Store
export const $modal = createStore<boolean>(false);

// Events
export const toggleModal = createEvent<boolean>();

// Actions
$modal.on(toggleModal, (state, toggle) => toggle);
