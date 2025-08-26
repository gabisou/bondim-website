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
      class={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
        props.isActive ? 'border-blue-500' : 'border-transparent'
      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      <img src={props.image} alt="Thumbnail" class="w-full h-full object-cover" />
    </button>
  );
});
