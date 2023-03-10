// // import { USER_INFO_KEY } from "../../constants/common";
import { SET_USER_INFOR } from "../types/user.type";

let userInfor = localStorage.getItem("WLC_LOGIN");
if (userInfor) {
  userInfor = JSON.parse(userInfor);
}
const DEFAULT_STATE = {
  userInfor
};
export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER_INFOR: {
      state.userInfor = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
