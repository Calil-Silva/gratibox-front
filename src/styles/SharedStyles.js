import styled, { css, keyframes } from "styled-components/macro";
import { fadeInUp } from "react-animations";
import { Link } from "react-router-dom";

const fadeInAnimation = keyframes`${fadeInUp}`;

export const SubmitStyle = css`
  height: 2.5rem;
  width: 10rem;
  color: #fff;
  background-color: #8c97ea;
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
  margin: 3rem 2rem 1rem;
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
  }
  h2 {
    font-size: 18px;
    font-weight: 300;
    color: #fff;
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
  border: 1px solid #604848;
  margin-bottom: 0.5rem;
  padding-left: 0.8rem;
  font-size: 24px;
  font-weight: bold;

  ::placeholder {
    font-size: 24px;
    font-weight: bold;
    color: #60484866;
  }
`;

export const Links = styled(Link)`
  border: none;
  background-color: none;
  color: #fff;
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

export const Plan = styled.div`
  margin: 2rem 0 1rem;
  height: 25rem;
  width: calc(100vw - 1rem);
  background-color: #e5cdb3;
  border-radius: 25px;

  img {
    object-fit: cover;
    height: ${({ max }) => max};
    width: 100%;
    border-radius: 25px;
  }

  div {
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: #4d65a8;
    font-size: 18px;
    font-weight: bold;
    width: calc(100% - 2rem);
    margin-left: 1.5rem;
    text-align: left;
    margin-bottom: 2rem;
  }
`;
