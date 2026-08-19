import axios from "axios";
import { apiUrl } from "./apiUrl";
export const signupApi = (user) => {
  return axios
    .post(`${apiUrl}/users`, {
      user,
    })
    .then((res) => {
      console.log(res);
      alert("註冊成功");
    })
    .catch((error) => {
      console.log(error.response);
      alert("註冊失敗");
    });
};
