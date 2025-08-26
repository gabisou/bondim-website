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
        class="w-full max-w-4xl rounded-lg object-contain"
      />
    </div>
  );
});
