import React from "react";
import styles from "./hologram-button.module.scss"; // Ensure the correct path

export const HologramButton: React.FC = () => {
  return (
    <div>
      <a className={styles.hologram_btn} href="#">
        site web
      </a>
    </div>
  );
};
