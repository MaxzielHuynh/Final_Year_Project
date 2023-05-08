import { loginFail, loginStart, loginSuccess } from "./userRedux";
import { publicReq } from "../reqMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/cfm/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};
