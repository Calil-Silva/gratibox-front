import styled, { keyframes } from "styled-components/macro";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { flipInX, fadeIn } from "react-animations";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Options({ userOptions, labels }) {
  const [showContent, setShowContent] = useState(false);
  const { choosedPlan, setChoosedPlan } = useContext(UserContext);
  const [inputType, setInputType] = useState("checkbox");

  useEffect(() => {
    if (labels === "Plano" || labels === "Entrega") {
      setInputType("radio");
    }
  }, [labels]);

  const handleUserPlan = (e) => {
    if (labels === "Plano") {
      setChoosedPlan({ ...choosedPlan, plan: e.target.id });
    }
    if (labels === "Entrega") {
      setChoosedPlan({ ...choosedPlan, deliveryDate: e.target.id });
    }
    if (labels === "Quero receber") {
      setChoosedPlan({
        ...choosedPlan,
        products: [...choosedPlan.products, e.target.id],
      });
    }
    if (
      labels === "Quero receber" &&
      choosedPlan.products.includes(e.target.id)
    ) {
      setChoosedPlan({
        ...choosedPlan,
        products: choosedPlan.products.filter((p) => p !== e.target.id),
      });
    }
  };

  return (
    <Body showcontent={showContent}>
      <div onClick={() => setShowContent(!showContent)} className="label">
        <span>{labels}</span>
        {showContent ? <ArrowUp /> : <ArrowDown />}
      </div>
      <form>
        {userOptions.map((_, i) => {
          return (
            <span key={i}>
              <input
                type={inputType}
                id={userOptions[i]}
                name="checked"
                onClick={(e) => handleUserPlan(e)}
              />
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
  user-select: none;
  transition: all 0.5s ease;
  position: relative;

  &:first-of-type {
    height: ${({ showcontent }) => (showcontent ? "5rem" : "3rem")};
  }

  .label {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    max-height: 3rem;

    span {
      margin-left: 1rem;
    }
  }

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
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

  input[type="radio"] {
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

  input[type="radio"]:after {
    content: "🧘";
    display: none;
  }

  input[type="radio"]:hover {
    background-color: lightgoldenrodyellow;
  }

  input[type="radio"]:checked {
    background-color: lightgoldenrodyellow;
  }

  input[type="radio"]:checked:after {
    display: block;
  }

  label {
    cursor: pointer;
  }
`;

const ArrowDown = styled(FiArrowDown)`
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;
  animation: 2s ${flipInAnimation};
`;

const ArrowUp = styled(FiArrowUp)`
  font-size: 2rem;
  position: absolute;
  right: 0.5rem;
  animation: 2s ${flipInAnimation};
`;
