import {
  WelcomeScreenWrapper,
  WScreen1,
  OnboardingContentSectionCard,
  TitleText,
  InfoText,
  Button,
  ContentWrapper,
  LogInLink,
  LogInLinkWrapper,
} from "./welcome-screen-styles";

import { getString } from "../../assets/messages/getString";

export default function WS1() {
  return (
    <>
      <WelcomeScreenWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <WScreen1 />

        <OnboardingContentSectionCard>
          <ContentWrapper>
            <TitleText>{getString("welcome3")}</TitleText>
            <InfoText>
              Browse thousands of products, from fashion to tech. Find what you
              love, effortlessly.
            </InfoText>
            <Button>Next</Button>
            <LogInLinkWrapper>
              <InfoText>Already Have An Account?</InfoText>
              <LogInLink>Log In</LogInLink>
            </LogInLinkWrapper>
          </ContentWrapper>
        </OnboardingContentSectionCard>
      </WelcomeScreenWrapper>
    </>
  );
}
