import { useGloContext } from "@/app/context/gloContext";
import styles from "./styles.module.css";
import Link from "next/link";

type Props = {
  instances: TInstance[];
};

export default function Header({ instances }: Props) {
  const { setGloInstances } = useGloContext();
  const handleSaveInstance = () => {
    setGloInstances([...instances]);
    localStorage.setItem("instances", JSON.stringify([...instances]));
  };

  return (
    <div className={styles.main}>
      <button className={styles.btn} onClick={handleSaveInstance}>
        save
      </button>
      <button className={styles.btn}>undo</button>
      <button className={styles.btn}>redo</button>
      <button className={styles.btn}>import</button>
      <button className={styles.btn}>
        <Link href={"/consumer"} target="blank">
          view
        </Link>
      </button>
    </div>
  );
}
