import React from "react";
import styles from "./RoundLogo.module.scss";

export const RoundLogo: React.FC = () => {
  return (
    <div>
      <a href="#" className={styles.link}>
        <svg
          viewBox="0 0 200 200"
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.link__svg}
          aria-labelledby="link2-title link2-desc"
        >
          <path
            id="link-circle-alt"
            className={styles.link__path}
            d="M 35, 100 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
            stroke="none"
            fill="none"
          />
          <circle cx="100" cy="100" r="90" fill="white" stroke="none" />

          <image href="/logo.png" x="67" y="67" width="65" height="65" />

          <text className={styles.link__text}>
            <textPath href="#link-circle-alt" stroke="none">
              • Impulse • création • design • code
            </textPath>
          </text>
        </svg>
      </a>
    </div>
  );
};
