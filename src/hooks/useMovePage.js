import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRequest, removeLastRequest } from "../store/customHookSlice";

const useMovePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requests = useSelector((state) => state.customHook.requests);

  const goBack = () => {
    if (requests.length > 0) {
      dispatch(removeLastRequest());
      if (requests.length === 1) {
        navigate("/smaples/SampleMain");
      } else {
        const lastRequest = requests[requests.length - 1];
        navigate(lastRequest.url);
      }
    } else {
      navigate("/smaples/SampleMain");
    }
  };

  const makeRequest = (url, params) => {
    dispatch(addRequest({ url, params }));
    navigate(url);
  };

  return { goBack, makeRequest };
};

export default useMovePage;
