import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: calc(100% - 4rem);
  height: 6rem;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  display: flex;

  & img {
    width: 100%;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export const NavItemWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NavbarActive = styled.span`
  width: 6px;
  height: 6px;
  position: absolute;
  top: -10px;
  background: black;
  border-radius: 100%;
`;
