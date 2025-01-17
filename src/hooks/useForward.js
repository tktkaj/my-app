import { useDispatch } from "react-redux";
import { addRequest } from "../store/customHookSlice";
import { useNavigate } from "react-router-dom";

const useForward = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const makeRequest = (url, params) => {
    dispatch(addRequest({ url, params }));
    navigate(url);
  };

  return { makeRequest };
};

export default useForward;
