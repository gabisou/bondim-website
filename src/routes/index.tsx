import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import capaImg from '../assets/imgs/capa.png';
import Features from "~/sections/Features/Features";
import { Media } from "~/sections/Media/Media";


export default component$(() => {
  return (
    <>
      <img
        src={capaImg}
        alt="Capa BONDIM"
        width={1920}
        height={1080}
        style={{ width: '100%', height: 'auto' }}
        loading="lazy"
      />

      <Features />
      <Media/>
    </>
  );
});

export const head: DocumentHead = {
  title: "BONDIM",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
