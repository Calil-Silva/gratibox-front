import styled, { keyframes } from "styled-components/macro";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { flipInX, fadeIn } from "react-animations";
import { useState } from "react";

export default function Options({ userOptions, labels }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <Body showcontent={showContent}>
      <span onClick={() => setShowContent(!showContent)}>
        <span>{labels}</span>
        {showContent ? <ArrowUp /> : <ArrowDown />}
      </span>
      <form>
        {userOptions.map((_, i) => {
          return (
            <span key={i}>
              <input type="checkbox" id={userOptions[i]} />
              <label htmlFor={userOptions[i]}>{userOptions[i]}</label>
            </span>
          );
        })}
      </form>
    </Body>
  );
}

const flipInAnimation = keyframes`${flipInX}`;
const fadeInAnimation = keyframes`${fadeIn}`;

const Body = styled.div`
  width: 80%;
  height: ${({ showcontent }) => (showcontent ? "7.5rem" : "3rem")};
  margin-bottom: 0.5rem;
  background-color: #e0d1ed9e;
  border-radius: 5px;
  color: #4d65a8;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0.7rem 0.5rem;
  user-select: none;
  transition: all 0.5s ease;

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
  }

  form {
    font-weight: initial;
    display: ${(props) => (props.showcontent ? "grid" : "none")};
    animation: 2s ${fadeInAnimation};
    grid-template-columns: 2fr 1fr;
    row-gap: 0.5rem;
    font-size: 15px;
    padding: 0 0.5rem;
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    background-color: #fff;
    margin-right: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type="checkbox"]:after {
    content: "🧘";
    display: none;
  }

  input[type="checkbox"]:hover {
    background-color: lightgoldenrodyellow;
  }

  input[type="checkbox"]:checked {
    background-color: lightgoldenrodyellow;
  }

  input[type="checkbox"]:checked:after {
    display: block;
  }

  label {
    cursor: pointer;
  }
`;

const ArrowDown = styled(FiArrowDown)`
  font-size: 2rem;
  position: absolute;
  right: 3.5rem;
  animation: 2s ${flipInAnimation};
`;

const ArrowUp = styled(FiArrowUp)`
  font-size: 2rem;
  position: absolute;
  right: 3.5rem;
  animation: 2s ${flipInAnimation};
`;
