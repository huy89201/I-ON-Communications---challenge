"use client";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";

//Dispatch<SetStateAction<TInstance>>

type Props = {
  currentInstance?: TInstance;
  setCurrentInstance: any;
  instances: TInstance[];
  setInstances: Dispatch<SetStateAction<TInstance[]>>;
};

export default function Bottom({
  currentInstance,
  setCurrentInstance,
  instances,
  setInstances,
}: Props) {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setCurrentInstance({
      ...currentInstance,
      props: {
        ...currentInstance?.props,
        [evt.target.name]: evt.target.value,
      },
    });

    setInstances(
      instances.map((item: TInstance) => {
        if (currentInstance?.id === item.id)
          return {
            ...item,
            props: {
              ...item.props,
              [evt.target.name]: evt.target.value,
            },
          };

        return item;
      })
    );
  };

  return (
    <div className={styles.main}>
      {currentInstance?.id && (
        <div>
          <div className={styles.form}>
            <label className={styles.label}>{currentInstance.type} text</label>
            <input
              name="text"
              className={styles.input}
              type="text"
              onChange={(evt) => handleChange(evt)}
              value={currentInstance.props.text}
            />
          </div>

          {currentInstance?.type === "button" ? (
            <div className={styles.form}>
              <label className={styles.label}>alert message</label>
              <input
                name="message"
                className={styles.input}
                type="text"
                onChange={(evt) => handleChange(evt)}
                value={currentInstance.props.message}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
