import styles from "./styles.module.css";

type Props = {
  handleDrag: Function;
};

const sideBarItems: TSidebarItems[] = [
  {
    type: "paragraph",
    label: "elementParagraph",
  },
  {
    type: "button",
    label: "elementButton",
  },
];

export default function Sidebar({ handleDrag }: Props) {
  return (
    <div className={styles.main}>
      {sideBarItems.map((item, index) => {
        return (
          <div
            key={index}
            className={styles.sideBarItems}
            draggable
            onDragEnd={(evt) => handleDrag(evt, item)}
          >
            <div className={styles.sideBarItemsBox}></div>
            <div className={styles.sideBarItemsLabel}>{item.type}</div>
          </div>
        );
      })}
    </div>
  );
}
