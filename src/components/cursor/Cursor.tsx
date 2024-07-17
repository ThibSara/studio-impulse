// Cursor.js
"use client";
import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { useCursor } from "./CursorContext";
import styles from "./style.module.css";

export const Cursor = () => {
  const { variant } = useCursor();
  const cursorVariantClass = variant === "buy" ? styles.buy : styles.default;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className={cursorVariantClass}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      ></motion.div>
    </div>
  );
};
