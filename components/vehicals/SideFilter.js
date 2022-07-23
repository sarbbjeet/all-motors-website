import React from "react";
import ToggleSwitch from "../ToogleSwitch";
import styles from "../../styles/SideFilter.module.scss";

export default function SideFilter({ filterEvent }) {
  return (
    <>
      <div
        style={{ marginBottom: "1px" }}
        className="row d-block d-lg-none text-center py-5 px-3  bg-white"
      >
        <button
          className="btn btn-block btn_height btn-outline-primary j_callFilter"
          type="button"
          onClick={() => filterEvent(true)}
        >
          Advanced Filter
        </button>
      </div>

      <div className="advFilter_box slow_3s h-100">
        <div
          className={`text-muted text_small d-block advFilter ${styles.sticky}`}
        >
          <div className={`${styles.inner} px-2 px-xl-3`}>
            <form
              className="max_filter"
              name="max_filter"
              action="/"
              method="post"
              encType="multipart/form-data"
            >
              <h2 className={styles.title}>Advanced Filter</h2>
              <select className={styles.select}>
                <option>Any make</option>
              </select>
              <select className={styles.select}>
                <option>Any model</option>
              </select>
              <select className={styles.select}>
                <option>Any color</option>
              </select>

              <select className={styles.select}>
                <option>Any doors</option>
              </select>
              <select className={styles.select}>
                <option>Any fuel type</option>
              </select>
              <div className="my-2 d-flex justify-content-center align-items-center">
                <span className={`${styles.toggleText} mr-2 `}>Price</span>
                <ToggleSwitch />
                <span className={`${styles.toggleText} ml-2`}>Budget</span>
              </div>

              <select className={styles.select}>
                <option>Price min</option>
              </select>
              <select className={styles.select}>
                <option>Price max</option>
              </select>
            </form>
          </div>
          <div className={styles.btnWrapper}>
            <button className={`${styles.btn}`}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
