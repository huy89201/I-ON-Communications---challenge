import styles from "./styles.module.css";
import MouseTracking from "../mouseTracking/index";

type Props = {
  instances: TInstance[];
  dragging: string;
  handleClickInstance: Function;
  currentInstance?: TInstance;
};

export default function Main({
  instances,
  dragging,
  handleClickInstance,
  currentInstance,
}: Props) {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <MouseTracking />
        <div className={styles.label}>Dragging: {dragging}</div>
        <div className={styles.label}>
          Instances: {instances.length === 0 ? "" : instances.length}
        </div>
        <div className={styles.label}>
          Config:{" "}
          {currentInstance?.id &&
            `{"id": "${currentInstance?.id}", "component": "${
              currentInstance?.component
            }", "props": {${
              currentInstance.props.text.length > 0
                ? `"text" :"${currentInstance.props.text}"`
                : ""
            } ${
              currentInstance.props.text.length > 0 &&
              currentInstance.props.message.length > 0
                ? ", "
                : ""
            } ${
              currentInstance.props.message.length > 0
                ? `"message": "${currentInstance.props.message}"`
                : ""
            }}}`}
        </div>
      </div>
      <div className={styles.right}>
        {instances.map((item) => {
          if (item.type === "paragraph")
            return (
              <div
                className={styles.text}
                key={parseInt(item.id)}
                onClick={() => handleClickInstance(item)}
              >
                {item.props.text.length > 0 ? item.props.text : item.type}
              </div>
            );

          return (
            <div key={parseInt(item.id)}>
              <button
                className={styles.button}
                onClick={() => handleClickInstance(item)}
              >
                {item.props.text.length > 0 ? item.props.text : item.type}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
