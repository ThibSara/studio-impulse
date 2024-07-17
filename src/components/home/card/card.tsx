import React from "react";
import styles from "./card.module.css";

export const Card = () => {
  const tiles = Array.from({ length: 100 });

  return (
    <div>
      <div className={styles.card__img}>
        <img
          src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
          alt="Example"
        />
        <div className={styles.card__grid_effect}>
          {tiles.map((_, index) => (
            <a
              key={index}
              className={styles.card__grid_effect_tile}
              href="#"
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
};
