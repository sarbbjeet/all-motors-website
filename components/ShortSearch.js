import React, { useState } from "react";
import getDeviceSize from "../utils/getDeviceSize";
import ToggleSwitch from "./ToogleSwitch";
import styles from "../styles/ShortSearch.module.scss";
import { useSelector, useDispatch } from "react-redux";
import AppFilterSelect from "./AppFilterSelect";
import { useRouter } from "next/router";

//get option list accotding to toggle selection
const PBDropdown = ({ isChecked, obj, style }) => {
  const { price, budget } = obj;
  //   document.getElementById("dropDown").selectedIndex = 1; //1 = option 2
  const selectedObj = isChecked ? budget : price;
  let optionsList = [];
  for (let c = 0; c < selectedObj.numerOfSteps; c++)
    if (c == 0) optionsList[c] = selectedObj.initial;
    else optionsList[c] = optionsList[c - 1] + selectedObj.stepSize;
  return (
    <select id="dropDown" className={style}>
      <option value="" disabled>
        {isChecked ? "Budget (max)" : "Price (max)"}
      </option>
      {optionsList.map((op, i) => (
        <option value={op} key={i}>
          To £{op}
        </option>
      ))}
    </select>
  );
};
const MobileSearch = ({
  filterKeysValues,
  toggleState,
  setToggleState,
  router,
  optionsObj,
}) => {
  return (
    <form className={`${getDeviceSize().width > 768 ? "d-none" : ""}`}>
      <div style={{ marginBottom: "15px" }}>
        <AppFilterSelect
          className={`mb-4 ${styles.select} w-100 p-2`}
          filter={filterKeysValues[0]}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <AppFilterSelect
          disabled={filterKeysValues[0]?.value == null && true}
          className={`${styles.select} w-100 p-2 mb-4`}
          filter={filterKeysValues[2]}
        />
      </div>

      {/* <div
        style={{
          maxWidth: "235px",
        }}
        className="ml-auto mr-auto d-flex align-items-center justify-content-start mb-4"
      >
        <h4 className={`${styles.toggleText} px-2`}>Price</h4>
        <ToggleSwitch checked={(isChecked) => setToggleState(isChecked)} />
        <h4 className={`${styles.toggleText} px-2`}>Finance</h4>
      </div> */}
      <div style={{ marginBottom: "15px" }}>
        <PBDropdown
          style={`${styles.select} w-100 p-2 mb-4`}
          isChecked={toggleState}
          obj={optionsObj}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            router.push("/vehicles/search");
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

//main function
export default function ShortSearch({ exStyle }) {
  const [toggleState, setToggleState] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const { filterKeysValues } = useSelector((state) => state.filters);

  const optionsObj = {
    price: {
      initial: 33000,
      numerOfSteps: 12,
      stepSize: 1000,
    },
    budget: {
      initial: 600,
      numerOfSteps: 8,
      stepSize: 25,
    },
  };

  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        padding: "15px 30px",
        width: "90%",
        ...exStyle,
      }}
    >
      <MobileSearch
        filterKeysValues={filterKeysValues}
        optionsObj={optionsObj}
        toggleState={toggleState}
        setToggleState={setToggleState}
        router={router}
      />
      <form
        className={`${getDeviceSize().width < 768 ? "d-none" : ""}`}
        method="post"
        id="d-search"
      >
        <div className="row">
          <h4 className={`${styles.title} col-md-6 p-1`}>Search Our Stock</h4>
          {/* <div className="col-md-6 p-1 d-flex align-items-center justify-content-start">
            <h4 className={`${styles.toggleText} px-2`}>Price</h4>
            <ToggleSwitch checked={(isChecked) => setToggleState(isChecked)} />
            <h4 className={`${styles.toggleText} px-2`}>Finance</h4>
          </div> */}
        </div>
        <div
          className="row p-2 bg-white"
          style={{ borderRadius: "5px", height: "70px" }}
        >
          <div className="col-md-3 p-1">
            <AppFilterSelect
              className={styles.select}
              filter={filterKeysValues[0]}
            />
          </div>
          <div className="col-md-3 p-1">
            <AppFilterSelect
              disabled={filterKeysValues[0]?.value == null && true}
              className={styles.select}
              filter={filterKeysValues[2]}
            />
          </div>
          <div className="col-md-3 p-1">
            <PBDropdown
              style={styles.select}
              isChecked={toggleState}
              obj={optionsObj}
            />
          </div>
          <div className="px-2 col-md-3 py-1 m-0">
            <button
              className={styles.btn}
              onClick={(e) => {
                e.preventDefault();
                router.push("/vehicles/search");
              }}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
