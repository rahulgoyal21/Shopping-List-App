import ACTION_EVENTS from "./type";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items/")
    .then((res) =>
      dispatch({ type: ACTION_EVENTS.GET_ITEMS, payload: res.data })
    );
};

export const deleteItems = (id) => (dispatch) => {
  axios
    .delete(`/api/items/${id}`)
    .then(() => dispatch({ type: ACTION_EVENTS.DELETE_ITEMS, payload: id }));
};

export const addItems = (newItem) => (dispatch) => {
  axios({ url: "/api/items", method: "POST", data: newItem }).then((res) =>
    dispatch({ type: ACTION_EVENTS.ADD_ITEMS, payload: res.data })
  );
};

export const setItemsLoading = () => {
  return {
    type: ACTION_EVENTS.ITEMS_LOADING,
  };
};
