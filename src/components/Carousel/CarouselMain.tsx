import { component$, Signal } from '@builder.io/qwik';

interface CarouselMainProps {
  images: string[];
  currentIndex: Signal<number>;
}

export const CarouselMain = component$((props: CarouselMainProps) => {
  return (
    <div class="w-full flex justify-center">
      <img 
        src={props.images[props.currentIndex.value]} 
        alt={`Screenshot ${props.currentIndex.value + 1}`} 
        class="w-full max-w-full md:max-w-[75vw] rounded-lg object-contain"
        width={1200}   // original image width
        height={800}   // original image height
      />
    </div>
  );
});
