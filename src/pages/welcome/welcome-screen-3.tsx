import { WelcomeScreenWrapper } from "./welcome-screen-styles";
export default function WS2() {
  return (
    <>
      <WelcomeScreenWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome Screen 3
      </WelcomeScreenWrapper>
    </>
  );
}
