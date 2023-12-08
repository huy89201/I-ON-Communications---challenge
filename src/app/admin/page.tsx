"use client";
import styles from "./page.module.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Bottom from "./components/bottom";
import { useState, DragEvent } from "react";
import { useGloContext } from "../context/gloContext";

export default function AdminPage() {
  const [instances, setInstances] = useState<TInstance[]>([]);
  const [dragging, setDragging] = useState<string>("");
  const [currentInstance, setCurrentInstance] = useState<TInstance>();

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
        message: item.type === "button" ? "" : "",
      },
    };
    setInstances([...instances, newInstance]);
  };

  // Click instances item
  const handleClickInstance = (instance: TInstance) => {
    setCurrentInstance(instance);
  };

  return (
    <main className={styles.main}>
      <Header  instances={instances}/>
      <div className={styles.dpFlex}>
        <Sidebar handleDrag={handleDrag} />
        <div className={styles.mainLayout}>
          <Main
            instances={instances}
            dragging={dragging}
            handleClickInstance={handleClickInstance}
            currentInstance={currentInstance}
          />
          <Bottom
            currentInstance={currentInstance}
            setCurrentInstance={setCurrentInstance}
            instances={instances}
            setInstances={setInstances}
          />
        </div>
      </div>
    </main>
  );
}
