import styled from "styled-components";

import ws1 from "../../assets/images/welcome-screen/ws-1.svg";
import ws2 from "../../assets/images/welcome-screen/ws-2.svg";
import ws3 from "../../assets/images/welcome-screen/ws-3.svg";

import { motion } from "framer-motion";

export const WelcomeScreenWrapper = styled(motion.div)`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OnboardingContentSectionCard = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  border-radius: 30px 30px 0 0;
  background-color: var(--c-secondary-1);
`;

export const animationSlideIn = {
  initial: { x: 1000 },
  animate: { x: 0 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};
interface ContentWrapperProps {
  animationSlideIn: string;
}

export const ContentWrapper = styled(motion.div)<ContentWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px;
  animation: ${({ animationSlideIn }) => animationSlideIn};
`;

export const TitleText = styled.h4`
  text-align: center;
`;

export const InfoText = styled.p`
  text-align: center;
  font: var(--f-text-md-lighter);
`;

export const Button = styled.button`
  background-color: var(--c-primary-3);
  color: var(--c-secondary-1);
`;

export const LogInLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const LogInLink = styled.a`
text-decoration;
`;

interface WScreenProps {
  bgImage: string;
}

const WScreen = styled(motion.div)<WScreenProps>`
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-position: center;
  margin-top: 50px;
  width: 270px;
  height: 270px;
`;

export const WScreen1 = () => <WScreen {...animationSlideIn} bgImage={ws1} />;
export const WScreen2 = () => <WScreen {...animationSlideIn} bgImage={ws2} />;
export const WScreen3 = () => <WScreen {...animationSlideIn} bgImage={ws3} />;
