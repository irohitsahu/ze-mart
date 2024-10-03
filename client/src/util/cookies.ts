import Cookies from "js-cookie";

export const setRefreshToken = (refreshToken: string) => {
  Cookies.set("refreshToken", refreshToken, {
    secure: true, // Send cookie only over HTTPS
    sameSite: "Strict", // Prevent CSRF attacks
    expires: 7, // Optional: Set expiry for 7 days
    path: "/", // Make cookie accessible across the domain
  });
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get("refreshToken");
};

export const deleteRefreshToken = () => {
  Cookies.remove("refreshToken", { path: "/" });
};
