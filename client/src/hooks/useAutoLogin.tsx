import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRefreshTokenMutation } from "../service/authApi";

import { setUserAuth } from "../store/slice/authSlice";
import {
  getRefreshTokenCookie,
  getUsernameCookie,
  setRefreshTokenCookie,
} from "../util/cookies";

export const useAutoLogin = () => {
  const dispatch = useDispatch();
  const [refreshTokenMutation] = useRefreshTokenMutation();
  const refreshToken = getRefreshTokenCookie();
  const username = getUsernameCookie();

  useEffect(() => {
    const attemptAutoLogin = async () => {
      if (refreshToken) {
        try {
          const result = await refreshTokenMutation({
            refreshToken,
            username,
          }).unwrap();
          dispatch(
            setUserAuth({
              accessToken: result.accessToken,
            })
          );
          setRefreshTokenCookie(result.refreshToken);
        } catch (error) {
          console.error("Auto login failed:", error);
        }
      }
    };

    attemptAutoLogin();
  }, [dispatch, refreshToken, refreshTokenMutation]);
};
