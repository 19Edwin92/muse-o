import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { usetoken } from "./cookies";

export const ProtectedRoute = ({ isPublic, isLogin, children }) => {
  const navigator = useNavigate();
  const { access_token } = usetoken();
  const isAuthenticated = isPublic || access_token;
  const isLogined = isLogin || !access_token;
  //isAuthenticated 로그인 해야하 가능한 서비스 false는 못 들어감.
  //isLogined 로그인 했지만 들어가면 안되는곳 false는 못 들어감.
  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인이 필요한 서비스 입니다.");
      navigator("/login");
      return;
    }
    if (!isLogined) {
      navigator("/");
      return;
    }
  }, [isAuthenticated, isLogined]);
  return children;
};
