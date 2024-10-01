import { motion } from "framer-motion";
import styled from "styled-components";

export const GMainScreenWrapper = styled(motion.div)`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 1rem;
`;

export const GContentSectionCard = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 30px 30px 0 0;
  background-color: var(--c-secondary-1);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding: 1rem 3rem;
`;

export const GButton = styled.button`
  background-color: var(--c-primary-3);
  color: var(--c-secondary-1);
  margin: 12px 0;
`;

export const GInput = styled.input`
  height: 4rem;
  width: 100%;
  color: white;
  background-color: #1f2937;
  border-radius: 0.5rem;
  padding: 0 4rem;
  margin: 12px 0;
  &::placeholder {
    color: #9ca3af;
  }
`;

export const GTitleTextBig = styled.p`
  text-align: center;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 400;
`;

export const GInfoText = styled.p`
  text-align: center;
  font: var(--f-text-md-lighter);
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 200;
`;
