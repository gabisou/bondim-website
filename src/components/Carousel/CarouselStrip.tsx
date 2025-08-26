import { component$, Signal, $ } from '@builder.io/qwik';
import { CarouselThumbnail } from './CarouselThumbnail';

interface CarouselStripProps {
  images: string[];
  currentIndex: Signal<number>;
}

export const CarouselStrip = component$((props: CarouselStripProps) => {
  // $-wrapped function so it's serializable in onClick$
  const selectThumbnail$ = $( (index: number) => {
    props.currentIndex.value = index;
  });

  return (
    <div class="flex gap-2 justify-center overflow-x-auto px-2">
      {props.images.map((img, index) => (
        <CarouselThumbnail
          key={index}
          image={img}
          isActive={props.currentIndex.value === index}
          onClick$={() => selectThumbnail$(index)} // ✅ serializable
        />
      ))}
    </div>
  );
});
