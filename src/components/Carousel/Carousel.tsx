import { component$, useSignal } from '@builder.io/qwik';
import { CarouselMain } from './CarouselMain';
import { CarouselStrip } from './CarouselStrip';

interface CarouselProps {
  images: string[];
}

export const Carousel = component$((props: CarouselProps) => {
  const currentIndex = useSignal(0);

  return (
    <div class="flex flex-col gap-4 w-full">
      <CarouselMain images={props.images} currentIndex={currentIndex} />
      <CarouselStrip images={props.images} currentIndex={currentIndex} />
    </div>
  );
});
