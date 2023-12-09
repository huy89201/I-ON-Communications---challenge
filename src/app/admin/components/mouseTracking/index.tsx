"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function MouseTracking() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  // Tracking mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className={styles.main}>
      Mouse: ({mousePos.x}, {mousePos.y})
    </div>
  );
}
