import styles from "./style.module.css";
import Cta from "./_components/_CTA/cta";
export default function Home() {
  return (
    <main className={`${styles.background} font-exo2 bg-cover bg-center h-screen flex justify-center`}>
      <Cta />
    </main>
  );
}
