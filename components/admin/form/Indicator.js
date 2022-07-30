import React from "react";
import {
  f2 as f2,
  secondary,
  secondaryLight,
} from "../../../styles/variables.module.scss";

const updateStage = (currentState, numberOfStages, step) => {
  if (currentState != 1 || currentState != numberOfStages)
    currentState = currentState + step;

  return currentState;
};

export default function Indicator({
  stages = ["search", "download", "initial"],
  currentStage = 1,
  changeStageEvent = () => {},
  numberOfStages = stages.length + 1,
  children,
}) {
  return (
    <div>
      <div className="step_wizard_list d-flex">
        {stages.map((stage, i) => (
          <div
            key={i}
            className={`step_wizard ${i == currentStage - 1 ? "current" : ""}`}
          >
            <span className="digit">{i + 1}</span>
            <span className="label">{stage}</span>
          </div>
        ))}
      </div>
      {children}
      <div className="d-flex justify-content-center px-2">
        <button
          onClick={() =>
            changeStageEvent(updateStage(currentStage, numberOfStages, -1))
          }
          className={`previous  ${currentStage === 1 && `d-none`}`}
        >
          Previous
        </button>
        <button
          onClick={() =>
            changeStageEvent(updateStage(currentStage, numberOfStages, 1))
          }
          className={`next ${numberOfStages <= currentStage && "d-none"}`}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .current .digit:before,
        .current ~ .step_wizard .digit:before {
          display: none;
        }
        .current ~ .step_wizard .digit:after {
          width: 10px;
          height: 10px;
        }

        .current ~ .step_wizard .label {
          opacity: 0.5;
        }

        .current .digit:after {
          background: #fff !important;
          border: 2px solid #21d4fd;
        }

        .current .digit {
          color: #21d4fd !important;
        }
        .step_wizard_list {
          position: relative;
        }
        .step_wizard {
          padding: 0 20px;
          flex-basis: 0;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 170px;
          position: relative;
          font-size: 18px;
          font-weight: 500;
          font-family: ${f2};
          white-space: nowrap;
        }
        .step_wizard ~ .step_wizard:after {
          content: "";
          background: #21d4fd;
          width: 100%;
          height: 2px;
          position: absolute;
          left: 0;
          transform: translateX(-50%);
          top: 27%;
        }
        .step_wizard .digit {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: 600;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          color: transparent;
          font-family: inherit;
        }
        .step_wizard .digit:after {
          content: "";
          height: 40px;
          width: 40px;
          background: #21d4fd;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: -10;
          //  background-color: #fff;
          //  border: 2px solid #21d4fd;
        }

        .step_wizard .digit:before {
          content: "";
          height: 10px;
          width: 20px;

          border-left: 3px solid #fff;
          border-bottom: 3px solid #fff;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -60%) rotate(-45deg);
          position: absolute;
          transform-origin: center center;
          //  display: none;
        }

        .step_wizard .label {
          font-size: 16px;
          font-weight: 600;
          margin-top: 10px;
          font-family: inherit;
        }

        button {
          width: 100px;
          font-family: ${f2};
          font-weight: 500;
          font-size: 18px;
          color: #fff;
          outline: none;
          border: none;
          padding: 5px;
          border-radius: 5px;
          margin: 5px;
        }
        button.next {
          background-color: ${secondary};
        }

        button.previous {
          background-color: #fff;
          color: ${secondary};
          border: 1px solid ${secondary};
        }
      `}</style>
    </div>
  );
}
