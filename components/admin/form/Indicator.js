import React, { useEffect, useRef, useState } from "react";
import Joi from "joi-browser";
import {
  f2 as f2,
  secondary,
  secondaryLight,
} from "../../../styles/variables.module.scss";

import schema from "../../../validation/schema";
const { initialSchema, featuresSchema, businessSchema } = schema();

import Script from "next/script";
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
  state,
  setState,
  children,
  onPublishEvent,
}) {
  const [isWindowLoad, setIsWindowLoad] = useState(false);
  useEffect(() => {
    setIsWindowLoad(true);
  }, []);
  const validate = (key = "initial") => {
    setState({ ...state, errors: {} });

    const schema = {
      initial: {
        ...initialSchema,
        image: Joi.string().required(),
      },
      features: {
        ...featuresSchema,
      },
      business: {
        ...businessSchema,
      },
      gallery: {},
    };
    const { error } = Joi.validate(state[key], schema[key]);
    if (error) {
      const { path, message } = error.details[0];
      setState({ ...state, errors: { [key]: { [`${path[0]}`]: message } } });
    }
    // if (typeof key === "undefined") return false;
    return error;
  };

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
          type="button"
          onClick={() =>
            changeStageEvent(updateStage(currentStage, numberOfStages, -1))
          }
          className={`prev  ${currentStage === 1 && `d-none`}`}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => {
            if (!validate(stages[currentStage - 1].toLowerCase()))
              changeStageEvent(updateStage(currentStage, numberOfStages, 1));
          }}
          className={`next ${numberOfStages - 1 == currentStage && "d-none"}`}
        >
          Next
        </button>
        <button
          disabled={state.loading}
          type="button"
          onClick={onPublishEvent}
          className={`pub ${numberOfStages - 1 > currentStage && "d-none"}`}
        >
          {state.loading && <i className="fas fa-spinner mx-1" />}
          Publish
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
          flex-basis: 0;
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          text-align: center;
          width: 170px;
          position: relative;
          font-size: 16px;
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
          transition: all 0.5s;
        }
        .button-hover {
          transform: scale(1.044);
          color: #fff !important;

          background-color: ${secondaryLight}!important;
        }
        button.next {
          background-color: ${secondary};
        }
        button.pub {
          background-color: ${state.loading ? "gray" : secondary};
        }

        button.prev {
          background-color: #fff;
          color: ${secondary};
          border: 1px solid ${secondary};
        }
      `}</style>

      <Script id="my-script">
        {isWindowLoad &&
          `   
           document.querySelector(".next").addEventListener("mouseover",(e)=>
           e.target.classList.add("button-hover")
           )
           document.querySelector(".next").addEventListener("mouseout",(e)=>
           e.target.classList.remove("button-hover")
           )   
           
           document.querySelector(".prev").addEventListener("mouseover",(e)=>
           e.target.classList.add("button-hover")
           )
           document.querySelector(".prev").addEventListener("mouseout",(e)=>
           e.target.classList.remove("button-hover")
           )  
          `}
      </Script>
    </div>
  );
}
