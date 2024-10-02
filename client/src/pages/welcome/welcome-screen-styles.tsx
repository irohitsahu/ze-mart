import styled from "styled-components";

import ws1 from "../../assets/images/welcome-screen/ws-1.svg";
import ws2 from "../../assets/images/welcome-screen/ws-2.svg";
import ws3 from "../../assets/images/welcome-screen/ws-3.svg";

import { motion } from "framer-motion";

// Animations
export const animationSlideIn = {
  initial: { x: 1000 },
  animate: { x: 0 },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
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
