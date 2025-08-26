import { component$ } from '@builder.io/qwik';

export const Media = component$(() => {
  return (
    <div class="w-full h-[100px] bg-[#2F9F5B]" 
    style={{ boxShadow: 'inset -10px -700px 127.2px 58px rgba(255,255,255,0.24)', }}>
      
      <h1 class="text-white font-bold uppercase text-7xl text-center py-[10px]">MEDIA</h1>
      {/* Conteúdo do Media aqui */}
    </div>
  );
});
