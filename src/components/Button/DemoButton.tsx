import { component$ } from '@builder.io/qwik';

export const DemoButton = component$(({ label, onClick$ }: DemoButtonProps) => {
  return (
    <button
      onClick$={onClick$}
      class="bg-[#FFE02A] rounded-xl px-2 py-1 font-bold text-white
             hover:bg-yellow-500 transition relative border-1 border-solid border-[#FFE02A] text-2xl"
      style={{ 
        textShadow: '2px 3px 0 black',
        boxShadow: `
          2px 2px 0px 0px white,                     /* sombra branca externa */
          inset -1px 0px 5.9px 6px rgba(167,58,0,0.25)  /* innershadow do Figma */
        `
      }}
    >
      {label}
    </button>
  );
});

