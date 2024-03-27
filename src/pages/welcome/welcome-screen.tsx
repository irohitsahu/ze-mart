import {
  WelcomeScreenWrapper,
  WScreen1,
  WScreen2,
  WScreen3,
  OnboardingContentSectionCard,
  TitleText,
  InfoText,
  Button,
  ContentWrapper,
  LogInLink,
  LogInLinkWrapper,
} from "./welcome-screen-styles";

import { getString } from "../../assets/messages/getString";
import { useState } from "react";

const WelcomeScreenContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  function handleNext() {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  }
  return (
    <>
      <WelcomeScreenWrapper>
        {currentStep === 1 ? (
          <WScreen1 />
        ) : currentStep === 2 ? (
          <WScreen2 />
        ) : (
          <WScreen3 />
        )}

        <OnboardingContentSectionCard>
          <ContentWrapper>
            <TitleText>
              {getString(`welcomeHeadingStep${currentStep}`)}
            </TitleText>
            <InfoText>{getString(`welcomeInfoStep${currentStep}`)}</InfoText>
            <Button onClick={handleNext}>
              {getString(`welcomeButtonStep${currentStep}`)}
            </Button>
            <LogInLinkWrapper>
              <InfoText>Already Have An Account?</InfoText>
              <LogInLink>Log In</LogInLink>
            </LogInLinkWrapper>
          </ContentWrapper>
        </OnboardingContentSectionCard>
      </WelcomeScreenWrapper>
    </>
  );
};

export default WelcomeScreenContainer;
