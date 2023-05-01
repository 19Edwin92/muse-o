import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";

export const cookies = new Cookies();

export const usetoken = () => {
  let decodetoken = null;
  let access_token = null;
  if (cookies.get("access_token")) {
    access_token = cookies.get("access_token");
    decodetoken = jwtDecode(access_token);
  }
  return { decodetoken, access_token };
};
