import styles from "./style.module.css";
import Cta from "./_components/cta";
export default function Home() {
  return (
    <main className={`${styles.background} bg-cover bg-center h-screen flex justify-center`}>
      <Cta />
    </main>
  );
}
