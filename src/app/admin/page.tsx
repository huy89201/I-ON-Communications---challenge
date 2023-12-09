"use client";
import styles from "./page.module.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Bottom from "./components/bottom";
import { useState, DragEvent } from "react";
import { useGloContext } from "../context/gloContext";

export default function AdminPage() {
  const [dragging, setDragging] = useState<string>("");
  const [currentInstance, setCurrentInstance] = useState<TInstance>();

  const { past, setPast, present, setPresent } = useGloContext();

  // Handle drag
  const handleDrag = (evt: DragEvent<HTMLDivElement>, item: TSidebarItems) => {
    evt.preventDefault();

    // Set new dragging
    setDragging(item.label);

    // Add new instances
    const newInstance: TInstance = {
      id: Math.floor(Math.random() * 10000000).toString(),
      component: item.label,
      type: item.type,
      props: {
        text: "",
        message: "",
      },
    };

    setPresent([...present, newInstance]);

    if (present.length > 0) setPast([...past, present.pop()!]);
  };

  // Click instances item
  const handleClickInstance = (instance: TInstance) => {
    setCurrentInstance(instance);
  };

  return (
    <main className={styles.main}>
      <Header instances={present} />
      <div className={styles.dpFlex}>
        <Sidebar handleDrag={handleDrag} />
        <div className={styles.mainLayout}>
          <Main
            instances={present}
            dragging={dragging}
            handleClickInstance={handleClickInstance}
            currentInstance={currentInstance}
          />
          <Bottom
            currentInstance={currentInstance}
            setCurrentInstance={setCurrentInstance}
            instances={present}
            setInstances={setPresent}
          />
        </div>
      </div>
    </main>
  );
}
