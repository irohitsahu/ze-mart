import Cookies from "js-cookie";

export const setRefreshTokenCookie = (refreshToken: string) => {
  Cookies.set("refreshToken", refreshToken, {
    secure: true, // Send cookie only over HTTPS
    sameSite: "Strict", // Prevent CSRF attacks
    expires: 7, // Optional: Set expiry for 7 days
    path: "/", // Make cookie accessible across the domain
  });
};

export const getRefreshTokenCookie = (): string | undefined => {
  return Cookies.get("refreshToken");
};

export const deleteRefreshTokenCookie = () => {
  Cookies.remove("refreshToken", { path: "/" });
};

export const setUsernameCookie = (username: string) => {
  Cookies.set("username", username, { secure: true, sameSite: "strict" });
};

export const getUsernameCookie = () => {
  return Cookies.get("username");
};

export const clearAuthCookie = () => {
  Cookies.remove("refreshToken");
  Cookies.remove("username");
};
