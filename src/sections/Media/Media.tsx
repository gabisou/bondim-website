import { component$ } from '@builder.io/qwik';
import { SectionTitle } from '~/components/SectionElements/SectionTitle';

export const Media = component$(() => {
  return (
    <div class="w-full h-[100px] bg-[#2F9F5B]" 
    style={{ boxShadow: 'inset -10px -700px 127.2px 58px rgba(255,255,255,0.24)', }}>
      
      <SectionTitle id="media" label="MEDIA" />
      {/* Conteúdo do Media aqui */}
    </div>
  );
});
