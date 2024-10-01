import {
  WScreen1,
  WScreen2,
  WScreen3,
  ContentWrapper,
  animationSlideIn,
} from "./welcome-screen-styles";

import { getString } from "../../assets/messages/getString";
import { useState } from "react";
import {
  GButton,
  GContentSectionCard,
  GInfoText,
  GMainScreenWrapper,
  GTitleTextBig,
} from "../../components/GlobalStyledComponents/GlobalStyledComponents";
import { Link } from "react-router-dom";

const WelcomeScreenContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  function handleNext() {
    setCurrentStep(currentStep + 1);
  }
  return (
    <>
      <GMainScreenWrapper>
        {currentStep === 1 ? (
          <WScreen1 />
        ) : currentStep === 2 ? (
          <WScreen2 />
        ) : (
          <WScreen3 />
        )}

        <GContentSectionCard>
          <ContentWrapper key={currentStep} {...animationSlideIn}>
            <GTitleTextBig>
              {getString(`welcomeHeadingStep${currentStep}`)}
            </GTitleTextBig>
            <GInfoText>{getString(`welcomeInfoStep${currentStep}`)}</GInfoText>
            <GButton onClick={handleNext}>
              {getString(`welcomeButtonStep${currentStep}`)}
            </GButton>
            <GInfoText>
              Already Have An Account?
              <Link to={"/login"}> Log In</Link>
            </GInfoText>
          </ContentWrapper>
        </GContentSectionCard>
      </GMainScreenWrapper>
    </>
  );
};

export default WelcomeScreenContainer;
