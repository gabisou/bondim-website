import { component$ } from '@builder.io/qwik';
import { Carousel } from '~/components/Carousel/Carousel';
import feature1 from '../../assets/imgs/feature1.png';
import feature2 from '../../assets/imgs/feature2.png';
import feature3 from '../../assets/imgs/feature3.png';

export const Media = component$(() => {
  return (
    <div class="w-full  bg-[#2F9F5B]" 
    style={{ boxShadow: 'inset -10px -700px 127.2px 58px rgba(255,255,255,0.24)', }}>
      
      <h1 class="text-white font-bold uppercase text-7xl text-center py-[10px]">MEDIA</h1>
      {
    <Carousel images={[feature1, feature2, feature3]} />
    }
      

    </div>
  );
});
