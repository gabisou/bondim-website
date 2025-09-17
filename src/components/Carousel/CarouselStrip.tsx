import { component$, Signal, $ } from '@builder.io/qwik';
import { CarouselThumbnail } from './CarouselThumbnail';

interface CarouselStripProps {
  images: string[];
  currentIndex: Signal<number>;
}

export const CarouselStrip = component$((props: CarouselStripProps) => {
  // wrap in $ so it's serializable
  const selectThumbnail$ = $( (index: number) => {
    props.currentIndex.value = index;
  });

  return (
    <div class="flex flex-wrap gap-2 justify-center overflow-x-auto px-2">
      {props.images.map((img, index) => (
        <CarouselThumbnail
          key={index}
          image={img}
          // reactive comparison for isActive
          isActive={props.currentIndex.value === index}
          onClick$={() => selectThumbnail$(index)}
        />
      ))}
    </div>
  );
});
