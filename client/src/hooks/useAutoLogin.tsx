import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRefreshTokenMutation } from "../service/authApi";

import { setUserAuth } from "../store/slice/authSlice";
import { getRefreshToken, setRefreshToken } from "../util/cookies";

export const useAutoLogin = () => {
  const dispatch = useDispatch();
  const [RefreshTokenResponse] = useRefreshTokenMutation();
  const refreshToken = getRefreshToken();

  useEffect(() => {
    const attemptAutoLogin = async () => {
      if (refreshToken) {
        try {
          const result = await RefreshTokenResponse(refreshToken).unwrap();
          dispatch(
            setUserAuth({
              accessToken: result.accessToken,
              username: result.username,
            })
          );
          setRefreshToken(result.refreshToken);
        } catch (error) {
          console.error("Auto login failed:", error);
        }
      }
    };

    attemptAutoLogin();
  }, [dispatch, refreshToken]);
};
