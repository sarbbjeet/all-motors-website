import styles from "../../../styles/Arrow.module.scss";
export default function Arrow({ direction = "left", handleClick = () => {} }) {
  const dir = direction === "left" ? "left" : "right";
  return (
    <div
      className={styles.wrapper}
      onClick={() => handleClick(direction == "left" ? -1 : 1)}
    >
      <i className={`${styles.arrow} ${styles[dir]}`} aria-hidden="true" />
      <style jsx>
        {`
          div {
            top: 50%;
            ${direction === "left" ? "left: 25px;" : ""}
            ${direction === "right" ? "right: 25px; " : ""};
          }
        `}
      </style>
    </div>
  );
}
