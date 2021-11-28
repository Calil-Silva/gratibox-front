import styled, { css, keyframes } from "styled-components/macro";
import { fadeInUp } from "react-animations";
import { Link } from "react-router-dom";
import { colors } from "./theme";

const fadeInAnimation = keyframes`${fadeInUp}`;

export const SubmitStyle = css`
  height: 2.5rem;
  width: 10rem;
  color: ${colors.white};
  background-color: ${colors.lightViolet};
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  animation: 4s ${fadeInAnimation};
`;

export const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 2rem 0;
  h1 {
    font-size: clamp(1rem, 7vmin, 2rem);
    font-weight: bold;
    color: ${colors.white};
  }
  h2 {
    font-size: clamp(0.5rem, 4vmin, 1rem);
    font-weight: 300;
    color: ${colors.white};
    margin-top: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 4rem;
  width: calc(100vw - 4rem);
  border-radius: 10px;
  border: 1px solid ${colors.brown};
  margin-bottom: 0.5rem;
  padding-left: 0.8rem;
  font-size: 24px;
  font-weight: bold;

  ::placeholder {
    font-size: 24px;
    font-weight: bold;
    color: ${colors.lightGray};
  }
`;

export const Links = styled(Link)`
  border: none;
  background-color: none;
  color: ${colors.white};
  background-color: transparent;
  margin: 1rem 0 1.5rem;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

export const Submit = styled.input`
  ${SubmitStyle}
`;

export const Marginer = styled.div`
  margin-top: ${({ vertical }) => vertical || "0"};
  margin-bottom: ${({ vertical }) => vertical || "0"};
  margin-left: ${({ horizontal }) => horizontal || "0"};
  margin-right: ${({ horizontal }) => horizontal || "0"};
`;
