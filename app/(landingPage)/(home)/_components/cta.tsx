import Image from "next/image";
import React from "react";
import ctaImg from "../../../../public/cta-img.png";

const cta = () => {
  return (
    <div className="flex flex-row-reverse  justify-items-center h-fit">
      <Image
        src={ctaImg}
        width={386}
        height={386}
        alt="image with joy and pokemons"
      />
      <h1 className="text-5xl">Gotta Heal 'Em All: Your Pokémon's Wellness Hub!</h1>
    </div>
  );
};

export default cta;
