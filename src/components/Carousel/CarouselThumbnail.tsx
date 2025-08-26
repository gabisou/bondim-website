import { component$ } from '@builder.io/qwik';

interface CarouselThumbnailProps {
  image: string;
  isActive: boolean;
  onClick$: () => void;
}

export const CarouselThumbnail = component$((props: CarouselThumbnailProps) => {
  return (
    <button
      onClick$={props.onClick$}
      class="flex-shrink-0 rounded-md overflow-hidden"
    >
      <img
        src={props.image}
        alt="Thumbnail"
        class={`w-36 h-24 sm:w-44 sm:h-29 md:w-48 md:h-32 object-cover transition duration-200 ${
          props.isActive ? 'brightness-100' : 'brightness-20'
        }`}
        width={1200}
        height={800}
      />
    </button>
  );
});
