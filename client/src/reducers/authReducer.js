import ACTION_EVENTS from "../actions/type";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION_EVENTS.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_EVENTS.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case ACTION_EVENTS.LOGIN_SUCCESS:
    case ACTION_EVENTS.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case ACTION_EVENTS.AUTH_ERROR:
    case ACTION_EVENTS.LOGIN_FAIL:
    case ACTION_EVENTS.LOGOUT_SUCCESS:
    case ACTION_EVENTS.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
