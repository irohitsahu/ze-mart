import { WelcomeScreenText } from "./onboardingText";

export function getString(key: keyof typeof WelcomeScreenText) {
  return WelcomeScreenText[key];
}
