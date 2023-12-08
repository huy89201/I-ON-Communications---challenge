"use client";
import { useGloContext } from "@/app/context/gloContext";
import styles from "./page.module.css";

export default function ConsumerPage() {
  const { gloInstances } = useGloContext();

  const handleClickButton = (item: TInstance) => {
    alert(item.props.message);
  };

  return (
    <div className={styles.main}>
      {gloInstances.map((item) => {
        if (item.type === "paragraph")
          return (
            <div className={styles.text} key={parseInt(item.id)}>
              {item.props.text.length > 0 ? item.props.text : item.type}
            </div>
          );

        return (
          <div key={parseInt(item.id)}>
            <button
              className={styles.button}
              onClick={() => handleClickButton(item)}
            >
              {item.props.text.length > 0 ? item.props.text : item.type}
            </button>
          </div>
        );
      })}
    </div>
  );
}
