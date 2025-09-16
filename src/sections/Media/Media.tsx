import { component$ } from '@builder.io/qwik';
import { Carousel } from '~/components/Carousel/Carousel';
import feature1 from '../../assets/imgs/feature1.png';
import feature2 from '../../assets/imgs/feature2.png';
import feature3 from '../../assets/imgs/feature3.png';

export const Media = component$(() => {
  return (
    <div class="w-full  bg-[#2F9F5B]" 
    style={{ boxShadow: 'inset -10px -700px 127.2px 58px rgba(255,255,255,0.24)', }}>
      
       <SectionTitle id="media-section" label="MEDIA" />
      
    <Carousel images={[feature1, feature2, feature3]} />
    
    
      
    <div class="flex flex-wrap gap-2 justify-center overflow-x-auto px-2 py-10">
      <iframe
  width="1120"
  height="630"
  src="https://www.youtube.com/embed/-Q73MqCNeXs?si=HOvNP_MYv0BYTcIF"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
></iframe>

    </div>
      
      <h2 class="text-white font-bold uppercase text-7xl text-center py-[10px]">ASSISTA BONDIM ANIMADO</h2>

    </div>
  );
});
