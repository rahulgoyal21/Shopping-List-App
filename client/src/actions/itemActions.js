import ACTION_EVENTS from "./type";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items/")
    .then((res) =>
      dispatch({ type: ACTION_EVENTS.GET_ITEMS, payload: res.data })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItems = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(() => dispatch({ type: ACTION_EVENTS.DELETE_ITEMS, payload: id }))
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItems = (newItem) => (dispatch, getState) => {
  axios
    .post("/api/items", newItem, tokenConfig(getState))
    .then((res) =>
      dispatch({ type: ACTION_EVENTS.ADD_ITEMS, payload: res.data })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ACTION_EVENTS.ITEMS_LOADING,
  };
};
