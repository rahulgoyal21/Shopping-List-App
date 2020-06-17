import ACTION_EVENTS from "../actions/type";

const initialState = {
  items: [],
  loading: false,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_EVENTS.GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case ACTION_EVENTS.DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case ACTION_EVENTS.ADD_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    case ACTION_EVENTS.ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default itemReducer;
