import ACTION_EVENTS from "../actions/type";

//RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  console.log("message", msg, status);
  return {
    type: ACTION_EVENTS.GET_ERRORS,
    payload: { msg, status, id },
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: ACTION_EVENTS.CLEAR_ERRORS,
  };
};
