import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeLastRequest } from "../store/customHookSlice"; 

export function useBackward() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const requests = useSelector(state => state.customHook.requests);

    const goBack = () => {
        if (requests.length > 0) {
            dispatch(removeLastRequest());
            navigate(-1); 
        } else {
            navigate("/smaples/SampleMain");
        }
    };

    return goBack;
}