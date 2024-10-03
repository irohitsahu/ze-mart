import styled, { keyframes } from "styled-components";

import { motion } from "framer-motion";

const transitionDelayAnimation = keyframes`
  0% {
    transition-delay: 0s;
  }
  100% {
    transition-delay: ${
      7.125 - 0.375 * 20
    }s; /* Adjust according to your needs */
  }
`;

export const LoginWrapper = styled(motion.div)``;

export const CounterWrapper = styled.div`
  letter-spacing: 0.125rem;
  line-height: 1;
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 3.125rem;
  font-size: 3.125rem;
  margin: 0 1.25rem;
  font-weight: 400;
  color: #ef8354;
`;

export const CounterText = styled.h3`
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 2s ease;
  transform: translateY(0);
  line-height: 1;

  & > span {
    flex: 0 0 100%;
    height: 100%;
  }

  animation: ${transitionDelayAnimation} 0.375s linear infinite;
`;
