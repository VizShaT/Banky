import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  username: "Janny",
  totalAmount: 2500701
};

const store = createStore(reducer, initialState);
export default store;
