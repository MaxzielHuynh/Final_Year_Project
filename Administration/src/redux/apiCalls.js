// eslint-disable-next-line no-unused-vars
import { publicReq, userReq } from "../reqMethods";
import { loginFail, loginStart, loginSuccess } from "./userRedux";
import {
  getProductFail,
  getProductStart,
  getProductSuccess,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFail,
  updateProductStart,
  updateProductSuccess,
  updateProductFail,
  addProductStart,
  addProductSuccess,
  addProductFail,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/cfm/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicReq.get("/wares");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFail());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userReq.delete(`/wares/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFail());
  }
};

export const updateProduct = async (product, id, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id: id, product: product }));
  } catch (err) {
    dispatch(updateProductFail());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userReq.post(`/wares`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFail());
  }
};
