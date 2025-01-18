import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, clearUserInfo } from "../store/userInfoSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userInfo.id);
// 로그인 시 넣을것
  const login = (id) => {
    dispatch(setUserInfo(id));
  };

  const logout = () => {
    dispatch(clearUserInfo());
  };

  return {
    userId,
    login,
    logout,
  };
};

export default useAuth;
