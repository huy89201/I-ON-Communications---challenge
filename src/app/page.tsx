import styles from "./page.module.css";
import AdminPage from "./admin/page";
import GloContextProvider from "./context/gloContext";

export default function Home() {
  return <AdminPage />;
}
