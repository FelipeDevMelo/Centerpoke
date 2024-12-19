import Image from "next/image";
import React from "react";
import ctaImg from "../../../../../public/cta-img.png";
import styles from "./style.module.css";
const cta = () => {
  return (
    <div className="flex flex-row-reverse ml-9 mr-9 mt-32  justify-items-center h-fit">
      <Image
        src={ctaImg}
        width={386}
        height={386}
        alt="image with joy and pokemons"
      />
      <h1 className={`${styles.title} text-5xl`}>
        Gotta Heal 'Em All: Your Pokémon's Wellness Hub!
      </h1>
    </div>
  );
};

export default cta;
