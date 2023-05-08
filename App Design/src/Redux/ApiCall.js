import { loginFail, loginStart, loginSuccess } from "./ClientRedux";
import { publicReq } from "../ReqMethods";

export const login=async(dispatch,client)=>{dispatch(loginStart());
    try {
        const res = await publicReq.post('/cfm/login', client);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFail());
    }
}